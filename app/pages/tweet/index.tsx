import Layout from "app/core/layouts/Layout"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import getTweets from "app/pages/tweet/queries/getTweets"
import { Suspense } from "react"
import NewTweetPage from "./new"

const ITEMS_PER_PAGE = 100

export const TweetsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ tweets, hasMore }] = usePaginatedQuery(getTweets, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <Link href="/tweet/:id">
              <a>{tweet.text}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        ＜前
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        次＞
      </button>
    </div>
  )
}

const Tweet: BlitzPage = () => {
  return (
    <div className="container">
      <Head>
        <title>今の感情を吐き出してみましょう</title>
      </Head>

      <div>
        <p>
          <Link href="/tweet/new">
            <a>感情をつぶやく</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <TweetsList />
          <NewTweetPage />
        </Suspense>
      </div>
    </div>
  )
}

Tweet.suppressFirstRenderFlicker = true
Tweet.authenticate = { redirectTo: "/auth/notSignIn" }
Tweet.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Tweet
