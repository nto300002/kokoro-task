import { resolver } from "blitz"
import db from "db"
import z from "zod"

const DeleteTweet = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteTweet), resolver.authorize(), async ({ id }) => {
  const tweet = await db.tweet.deleteMany({ where: { id } })

  return tweet
})
