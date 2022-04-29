import { resolver, NotFoundError } from "blitz"
import db from "db"
import { useEffect, useState } from "react"
import { z } from "zod"

const GetTweet = z.object({
  emotion: z.string(),
})

export default resolver.pipe(
  resolver.zod(GetTweet),
  resolver.authorize(),
  async ({ emotion }, word) => {
    const [emotionList, setEmotionList] = useState([])
    const fetchTweet = async (word) => {
      const tweet = await db.tweet.findFirst({
        where: { emotion },
      })
    }
    const tweet = await db.tweet.findFirst({
      where: { emotion },
    })

    useEffect(() => {
      fetchTweet(word)
    }, [word])

    if (!tweet) throw new NotFoundError()

    return tweet
  }
)
