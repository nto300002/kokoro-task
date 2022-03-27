import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { GlassmorphismAnalogClock } from "app/core/components/atoms/clock/AnalogClock"
import TaskList from "app/core/components/organisms/task/TaskList"
import { Suspense } from "react"
import { deleteTaskAPI, updateTaskAPI } from "app/mutations/tasks/api"

const Task: BlitzPage = () => {
  return (
    <>
      <div className="container">
        <GlassmorphismAnalogClock />
        <main>
          <h1>task</h1>
          <Suspense fallback={<div>loading...</div>}>
            {" "}
            <TaskList deleteTask={deleteTaskAPI} updateTask={updateTaskAPI} />
          </Suspense>
        </main>
      </div>
    </>
  )
}

Task.suppressFirstRenderFlicker = true
Task.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Task
