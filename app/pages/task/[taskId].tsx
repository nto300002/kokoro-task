import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTask from "app/pages/task/queries/getTask"
import deleteTask from "app/pages/task/mutations/deleteTask"

export const Task = () => {
  const router = useRouter()
  const taskId = useParam("taskId", "number")
  const [deleteTaskMutation] = useMutation(deleteTask)
  const [task] = useQuery(getTask, { id: taskId })

  return (
    <>
      <Head>
        <title>Task {task.id}</title>
      </Head>

      <div>
        <h1>title:{task.title}</h1>
        <p>{task.concentration_time}分頑張りました</p>

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
      </div>
    </>
  )
}

const ShowTaskPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.TasksPage()}>
          <a>Tasks</a>
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
