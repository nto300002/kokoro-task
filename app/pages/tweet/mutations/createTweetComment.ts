import { resolver } from "blitz"
import z from "zod"
import db from "db"

const CreateTweetComment = z.object({
  text: z.string(),
  tweet: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateTweetComment),
  resolver.authorize(),
  async (input) => {
    const tweetComment = await db.tweetComment.create({
      data: input,
    })
    return tweetComment
  }
)
