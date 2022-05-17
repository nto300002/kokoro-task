import { createContext, Suspense, useContext, useState } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTask from "app/pages/task/queries/getTask"
import deleteTask from "app/pages/task/mutations/deleteTask"
import CountDownTimer from "app/core/components/timer"
import { modalContext, useModal } from "../../core/components/timer/context/modal"
import taskDone from "./mutations/taskDone"
import taskReset from "./mutations/taskReset"
import buttonStyle from "app/core/components/atoms/button/Button.module.scss"
import styles from "app/core/components/atoms/mainContent.module.scss"
import taskStyles from "app/core/components/atoms/task/task.module.scss"

export const ModalClose = createContext(false)

export const Task = () => {
  const router = useRouter()
  const taskId = useParam("taskId", "number")
  const [deleteTaskMutation] = useMutation(deleteTask)
  const [task, { refetch }] = useQuery(getTask, { id: taskId })
  const ctx = useModal()
  const [taskDoneMutation] = useMutation(taskDone)
  const [isDone, setDone] = useState(task.done)

  const TaskDone = async (id: number) => {
    try {
      await taskDoneMutation({ id })
      router.push(Routes.TasksPage())
    } catch (error) {
      alert(`エラーが発生しました`)
    }
  }
  const [taskResetMutation] = useMutation(taskReset)
  const TaskReset = async (id: number) => {
    try {
      await taskResetMutation({ id })
      router.push(Routes.TasksPage())
    } catch (error) {
      alert(`エラーが発生しました`)
    }
  }

  return (
    <>
      <Head>
        <title>Task {task.id}</title>
      </Head>

      <div>
        <h1 className={styles.h2}>
          <span className={styles.title}>【title】</span>
          {task.title}
        </h1>
        <p className={styles.textMap}>集中できた時間（分） {task.concentration_time}</p>
        <div className={taskStyles.content}>
          <Link href={Routes.EditTaskPage({ taskId: task.id })}>
            <a>
              <button className={buttonStyle.Button}>編集</button>
            </a>
          </Link>

          <button
            className={buttonStyle.Button}
            type="button"
            onClick={async () => {
              if (window.confirm("削除しますか？")) {
                await deleteTaskMutation({ id: task.id })
                router.push(Routes.TasksPage())
              }
            }}
            style={{ marginLeft: "0.5rem" }}
          >
            削除
          </button>
        </div>
        <br />
        <modalContext.Provider value={ctx}>
          <CountDownTimer />
        </modalContext.Provider>
        {isDone ? (
          <>
            <button className={taskStyles.button} onClick={() => TaskReset(task.id)}>
              進捗をリセット
            </button>
            <span className={taskStyles.success}>完了</span>
          </>
        ) : (
          <>
            <button className={taskStyles.button} onClick={() => TaskDone(task.id)}>
              進捗をすすめる
            </button>
            <span className={taskStyles.notSuccess}>未完了</span>
          </>
        )}
      </div>
    </>
  )
}

const ShowTaskPage: BlitzPage = () => {
  return (
    <div className={styles.content}>
      <p>
        <Link href={Routes.TasksPage()}>
          <a>タスク一覧に戻る</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Task />
      </Suspense>
    </div>
  )
}

ShowTaskPage.authenticate = true
ShowTaskPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowTaskPage
