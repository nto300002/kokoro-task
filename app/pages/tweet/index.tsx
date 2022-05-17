import Layout from "app/core/layouts/Layout"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import getTweets from "app/pages/tweet/queries/getTweets"
import React, { Suspense } from "react"
import styles from "app/core/components/atoms/mainContent.module.scss"
import Calendar from "app/core/components/atoms/calendar/calendar"

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
      <h2 className={styles.h2}>つぶやき</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <p className={styles.textMap}>
              あなたは{tweet.text}とつぶやいた
              <br />
              {tweet.emotion}...!
              <br />
              <Link href={{ pathname: "/tweet/[tweetId]", query: { tweetId: tweet.id } }}>
                <a className={styles.a}>内容を見る</a>
              </Link>
            </p>

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
        ＜
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        ＞
      </button>
    </div>
  )
}

const Tweet: BlitzPage = () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>つぶやき日記</title>
      </Head>

      <div>
        <h1 className={styles.h1}>つぶやき日記</h1>
        <div className={styles.space}>
          <Link href={Routes.NewTweetPage()}>
            <a className={styles.a}>
              <span className={styles.textMap}>新しく作る</span>
            </a>
          </Link>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Calendar />
          <TweetsList />
        </Suspense>
      </div>
    </div>
  )
}

Tweet.suppressFirstRenderFlicker = true
Tweet.authenticate = { redirectTo: "/auth/notSignIn" }
// Tweet.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Tweet
