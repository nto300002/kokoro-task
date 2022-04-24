import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes, useSession } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTasks from "app/pages/task/queries/getTasks"
import NewTaskPage from "./new"

const ITEMS_PER_PAGE = 100

export const TasksList = () => {
  const session = useSession()
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ tasks, hasMore }] = usePaginatedQuery(getTasks, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={Routes.ShowTaskPage({ taskId: task.id })}>
              <a>{task.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        ＜
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        ＞
      </button>
    </div>
  )
}

const TasksPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>タスク一覧</title>
      </Head>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <TasksList />
          <NewTaskPage />
        </Suspense>
      </div>
    </>
  )
}

TasksPage.authenticate = { redirectTo: "/auth/notSignIn" }
TasksPage.getLayout = (page) => <Layout>{page}</Layout>

export default TasksPage
