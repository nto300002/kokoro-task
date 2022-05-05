import { resolver, NotFoundError } from "blitz"
import z from "zod"
import db from "db"

const GetProfile = z.object({
  id: z.number().optional(),
})

export default resolver.pipe(resolver.zod(GetProfile), resolver.authorize(), async ({ id }) => {
  const profile = await db.user.findFirst({
    where: { id },
  })

  if (!profile) throw new NotFoundError()

  return profile
})
