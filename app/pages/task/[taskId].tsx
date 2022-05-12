import { createContext, Suspense, useContext, useState } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTask from "app/pages/task/queries/getTask"
import deleteTask from "app/pages/task/mutations/deleteTask"
import CountDownTimer from "app/core/components/timer"
import { modalContext, useModal } from "../../core/components/timer/context/modal"

import taskDone from "./mutations/taskDone"
import taskReset from "./mutations/taskReset"

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
        <h1>title:{task.title}</h1>
        <p>集中できた時間（分）</p>
        <p>{task.concentration_time}</p>

        <Link href={Routes.EditTaskPage({ taskId: task.id })}>
          <a>編集</a>
        </Link>

        <button
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
        <br />
        <modalContext.Provider value={ctx}>
          <CountDownTimer />
        </modalContext.Provider>
        {isDone ? (
          <>
            <button onClick={() => TaskReset(task.id)}>進捗をリセット</button>
            <span>完了</span>
          </>
        ) : (
          <>
            <button onClick={() => TaskDone(task.id)}>進捗をすすめる</button>
            <span>未完了</span>
          </>
        )}
      </div>
    </>
  )
}

const ShowTaskPage: BlitzPage = () => {
  return (
    <div>
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
