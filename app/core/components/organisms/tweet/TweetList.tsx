import { User } from "@prisma/client"
import { useQueries, useQuery } from "react-query"
import styles from "./TweetList.module.scss"

const TweetList = () => {
  const { data: tweets, isLoading } = useQuery("tweets", async () => {
    const res = await fetch("kokoro-task/app/api/Tweet/tweet.ts")

    return res.json()
  })

  if (isLoading) return <span>Loading</span>

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{}</h2>
        <div className={styles.count}></div>
      </div>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <h2>{tweet.title}</h2>
            <span>{tweet.body}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TweetList
