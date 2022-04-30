import { resolver } from "blitz"
import z from "zod"
import db from "db"

const DeleteTweetComment = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteTweetComment),
  resolver.authorize(),
  async ({ id }) => {
    const tweetComment = await db.tweetComment.delete({
      where: { id },
    })
    return tweetComment
  }
)
