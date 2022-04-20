import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetTweet = z.object({
  id: z.number().optional(),
})

export default resolver.pipe(resolver.zod(GetTweet), resolver.authorize(), async ({ id }) => {
  const tweet = await db.tweet.findFirst({
    where: { id },
  })

  if (!tweet) throw new NotFoundError()

  return tweet
})
