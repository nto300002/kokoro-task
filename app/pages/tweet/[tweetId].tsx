import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getTweet from "./queries/getTweet"
import deleteTweet from "./mutations/deleteTweet"
import styles from "app/core/components/atoms/mainContent.module.scss"
import styleButton from "app/core/components/atoms/button/Button.module.scss"

export const TweetId = () => {
  const router = useRouter()
  const tweetId = useParam("tweetId", "number")
  const [deleteTweetMutation] = useMutation(deleteTweet)
  const [tweet] = useQuery(getTweet, { id: tweetId })

  return (
    <>
      <Head>
        <title>{tweet.id}個目のつぶやき</title>
      </Head>

      <h1 className={styles.h2}>つぶやき</h1>
      <p className={styles.textMap}>あなたは{tweet.text}とつぶやいた</p>
      <p className={styles.textMap}>今の気持ち：{tweet.emotion}</p>

      <button
        className={styleButton.deleteButton}
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
    <div className={styles.content}>
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
