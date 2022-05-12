import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTask from "app/pages/task/queries/getTask"
import editTask from "app/pages/task/mutations/editTask"
import { TaskEditForm, FORM_ERROR } from "app/pages/task/components/TaskEditForm"

export const EditTask = () => {
  const router = useRouter()
  const taskId = useParam("taskId", "number")
  const [task, { setQueryData }] = useQuery(
    getTask,
    { id: taskId },
    {
      staleTime: Infinity,
    }
  )
  const [editTaskMutation] = useMutation(editTask)

  return (
    <>
      <Head>
        <title>タスク編集 ＞id:{task.id}</title>
      </Head>

      <div>
        <h1>タスク編集 ＞id:{task.id}</h1>

        <TaskEditForm
          submitText="Update Task"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateTask}
          initialValues={task}
          onSubmit={async (values) => {
            try {
              const updated = await editTaskMutation({
                id: task.id,
                concentration_time: task.concentration_time,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowTaskPage({ taskId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditTaskPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditTask />
      </Suspense>

      <p>
        <Link href={Routes.TasksPage()}>
          <a>一覧に戻る</a>
        </Link>
      </p>
    </div>
  )
}

EditTaskPage.authenticate = true
EditTaskPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditTaskPage
