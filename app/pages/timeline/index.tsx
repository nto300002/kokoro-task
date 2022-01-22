import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Timeline: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>timeline</h1>
      </main>
    </div>
  )
}

Timeline.suppressFirstRenderFlicker = true
Timeline.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Timeline
