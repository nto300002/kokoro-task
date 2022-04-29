import Layout from "app/core/layouts/Layout"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import getTweets from "app/pages/tweet/queries/getTweets"
import React, { Suspense, useEffect, useState } from "react"
import deleteTweetMutation from "./mutations/deleteTweet"
import { tweetFliterData, TweetFilter } from "./components/filter/tweetFilter"
import { useQuery } from "react-query"
import getTweet from "./queries/getTweet"
import getEmotion from "./components/filter/tweetEmotionList"

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
            <p>あなたは{tweet.text}とつぶやいた</p>
            <p>{tweet.emotion}...!</p>
            <Link href={{ pathname: "/tweet/[tweetId]", query: { tweetId: tweet.id } }}>
              <a>つぶやきを見る、コメントする</a>
            </Link>
            {/* <button
              type="button"
              onClick={async () => {
                if (window.confirm("削除しますか？")) {
                  await deleteTweetMutation({ id: tweet.id }, tweet)
                }
              }}
            >
              削除する
            </button> */}
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
        <title>つぶやき日記</title>
      </Head>

      <div>
        <h2>つぶやき日記</h2>
        <Link href={Routes.NewTweetPage()}>
          <a>新しく作る</a>
        </Link>

        <Suspense fallback={<div>Loading...</div>}>
          <TweetsList />
        </Suspense>
      </div>
    </div>
  )
}

Tweet.suppressFirstRenderFlicker = true
Tweet.authenticate = { redirectTo: "/auth/notSignIn" }
Tweet.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Tweet
