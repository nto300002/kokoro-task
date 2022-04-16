import { resolver } from "blitz"
import db from "db"
import z from "zod"

const UpdateTweet = z.object({
  id: z.number(),
  text: z.string(),
  emotion: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateTweet),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const tweet = await db.tweet.update({
      where: { id },
      data: {
        ...data,
      },
    })

    return tweet
  }
)
