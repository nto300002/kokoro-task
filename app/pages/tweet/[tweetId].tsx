import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getTweet from "./queries/getTweet"
import deleteTweet from "./mutations/deleteTweet"
import Tweet from "."

export const TweetId = () => {
  const router = useRouter()
  const tweetId = useParam("tweetId", "number")
  const [deleteTweetMutation] = useMutation(deleteTweet)
  const [tweet, { refetch }] = useQuery(getTweet, { id: tweetId })

  return (
    <>
      <Head>
        <title>{tweet.id}個目のつぶやき</title>
      </Head>

      <p>あなたは{tweet.text}とつぶやいた</p>
      <p>今の気持ち：{tweet.emotion}</p>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("削除しました")) {
            await deleteTweetMutation({ id: tweet.id })
            router.push({ pathname: "/tweet" })
          }
        }}
      >
        削除する
      </button>
    </>
  )
}

export const ShowTweetPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TweetId />
      </Suspense>
      <p>
        <Link href="/tweet">
          <a>つぶやきのページへ</a>
        </Link>
      </p>
    </div>
  )
}

export default ShowTweetPage
