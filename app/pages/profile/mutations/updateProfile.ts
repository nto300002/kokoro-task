import { resolver } from "blitz"
import z, { number } from "zod"
import db from "db"

const UpdateProfile = z.object({
  id: number(),
  name: z.string().optional(),
  profile: z.string().optional(),
  email: z.string().email().optional(),
})

export default resolver.pipe(
  resolver.zod(UpdateProfile),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const profile = await db.user.update({
      where: { id },
      data: {
        ...data,
      },
    })
    return profile
  }
)
