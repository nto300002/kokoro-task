import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createTask from "app/pages/task/mutations/createTask"
import { TaskForm, FORM_ERROR } from "app/pages/task/components/TaskForm"
import styles from "app/core/components/atoms/mainContent.module.scss"

const NewTaskPage: BlitzPage = () => {
  const router = useRouter()
  const [createTaskMutation] = useMutation(createTask)

  return (
    <div>
      <h1 className={styles.h2}>新しいタスク追加</h1>

      <TaskForm
        submitText="Create Task"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateTask}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const task = await createTaskMutation(values)
            router.push(Routes.ShowTaskPage({ taskId: task.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </div>
  )
}

NewTaskPage.authenticate = true

export default NewTaskPage
