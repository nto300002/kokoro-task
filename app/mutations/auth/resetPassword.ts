import { resolver, SecurePassword, hash256 } from "blitz"
import db from "db"
import { ResetPassword } from "app/core/components/auth/validations"
import login from "./login"

export class ResetPasswordError extends Error {
  name = "リセットパスワードエラー"
  message = "リンクが無効か有効期限が切れています"
}

export default resolver.pipe(resolver.zod(ResetPassword), async ({ password, token }, ctx) => {
  const hashedToken = hash256(token)
  const possibleToken = await db.token.findFirst({
    where: { hashedToken, type: "RESET_PASSWORD" },
    include: { user: true },
  })

  if (!possibleToken) {
    throw new ResetPasswordError()
  }
  const savedToken = possibleToken

  await db.token.delete({ where: { id: savedToken.id } })

  if (savedToken.expiresAt < new Date()) {
    throw new ResetPasswordError()
  }

  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.update({
    where: { id: savedToken.userId },
    data: { hashedPassword },
  })

  await db.session.deleteMany({ where: { userId: user.id } })

  await login({ email: user.email, password }, ctx)

  return true
})
