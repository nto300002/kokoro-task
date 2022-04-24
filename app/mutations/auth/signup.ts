import { resolver, SecurePassword, Ctx } from "blitz"
import db from "db"
import { Signup } from "./validations"
import { Role } from "types"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password }, ctx: Ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: { email: email.toLowerCase().trim(), hashedPassword, role: "USER", heart: 1 },
    select: { id: true, name: true, email: true, role: true },
  })

  await ctx.session.$create({ userId: user.id, role: user.role as Role })
  return user
})
