import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import TweetList from "app/core/components/organisms/tweet/TweetList"
import NewTweetForm from "app/core/components/newTweetForm"

import { Suspense } from "react"

const Tweet: BlitzPage = () => {
  // const { data: session } = useSession();
  // if (session) {
  //   return <div>Loading...</div>
  // }
  return (
    <div className="container">
      <main>
        <h1>tweet</h1>

        <Suspense fallback={<p>Loading...</p>}>
          <TweetList />
          <NewTweetForm />
        </Suspense>
      </main>
    </div>
  )
}

Tweet.suppressFirstRenderFlicker = true
Tweet.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Tweet
