import { resolver } from "blitz"
import z, { number } from "zod"
import db from "db"

const UpdateProfile = z.object({
  id: number(),
})

export default resolver.pipe(
  resolver.zod(UpdateProfile),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const profile = await db.user.update({
      where: { id },
      data: {
        ...data,
        heart: { increment: 1 },
      },
    })
    return profile
  }
)
