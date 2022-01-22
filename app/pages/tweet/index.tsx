import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Tweet: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>tweet</h1>
      </main>
    </div>
  )
}

Tweet.suppressFirstRenderFlicker = true
Tweet.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Tweet
