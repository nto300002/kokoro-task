import { createContext, Suspense, useContext, useState } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTask from "app/pages/task/queries/getTask"
import deleteTask from "app/pages/task/mutations/deleteTask"
import CountDownTimer from "app/core/components/timer"
import { modalContext, useModal } from "../../core/components/timer/context/modal"

export const ModalClose = createContext(false)

export const Task = () => {
  const router = useRouter()
  const taskId = useParam("taskId", "number")
  const [deleteTaskMutation] = useMutation(deleteTask)
  const [task] = useQuery(getTask, { id: taskId })
  const ctx = useModal()

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

        <modalContext.Provider value={ctx}>
          <CountDownTimer />
        </modalContext.Provider>
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
