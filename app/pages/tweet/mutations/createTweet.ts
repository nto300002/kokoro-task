import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

export const CreateTweet = z.object({
  text: z.string(),
  emotion: z.string(),
})

export default resolver.pipe(resolver.zod(CreateTweet), resolver.authorize(), async (input) => {
  const tweet = await db.tweet.create({
    data: {
      ...input,
    },
  })
  return tweet
})
