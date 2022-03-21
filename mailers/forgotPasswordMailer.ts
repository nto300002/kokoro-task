import previewEmail from "preview-email"

type ResetPasswordMailer = {
  to: string
  token: string
}

export function forgotPasswordMailer({ to, token }: ResetPasswordMailer) {
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/reset-password?token=${token}`

  const msg = {
    from: "TODO@example.com",
    to,
    subject: "パスワードの再設定について",
    html: `
    <h1>Reset Your Password</h1>
    <h3>NOTE: You must set up a production email integration in mailers/forgotPasswordMailer.ts</h3>

    <a href="${resetUrl}">
      Click here to set a new password
    </a>
    `,
  }

  return {
    async send() {
      if (process.env.NODE_ENV === "production") {
        // 本番のメールアドレス
        throw new Error("本番用の実装がありません")
      } else {
        await previewEmail(msg)
      }
    },
  }
}
