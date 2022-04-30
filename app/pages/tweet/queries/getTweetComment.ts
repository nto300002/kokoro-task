import { resolver } from "blitz"
import z from "zod"
import db from "db"

const GetTweetComment = z.object({
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetTweetComment),
  resolver.authorize(),
  async ({ id }) => {
    const tweetComment = await db.tweetComment.findFirst({
      where: { id },
    })
    return tweetComment
  }
)
