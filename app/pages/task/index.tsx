import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Task: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>task</h1>
      </main>
    </div>
  )
}

Task.suppressFirstRenderFlicker = true
Task.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Task
