import { BlitzPage, useRouterQuery, Link, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { ResetPassword } from "app/core/components/auth/validations"
import resetPassword from "app/mutations/auth/resetPassword"
import { FORM_ERROR, Form } from "app/core/components/Form"

const ResetPasswordPage: BlitzPage = () => {
  const query = useRouterQuery()
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword)

  return (
    <div>
      <h1>新しいパスワードを入力してください</h1>

      {isSuccess ? (
        <div>
          <h2>パスワードをリセットしました</h2>
          <p>
            <Link href="/">ホームページへ</Link>
          </p>
        </div>
      ) : (
        <Form
          submitText="パスワードリセット"
          // omit 型エラー
          // schema={ResetPassword.omit({ token: true })}
          initialValues={{ password: "", passwordConfirmation: "" }}
          onSubmit={async (values) => {
            try {
              await resetPasswordMutation({
                ...values,
                token: query.token as string,
              })
            } catch (error) {
              if (error.name === "ResetPasswordError") {
                return {
                  [FORM_ERROR]: error.message,
                }
              } else {
                return {
                  [FORM_ERROR]:
                    "申し訳ありません、予期せぬエラーが発生しました。もう一度お試しください。",
                }
              }
            }
          }}
        >
          <LabeledTextField name="password" label="New Password" type="password" />
          <LabeledTextField
            name="passwordConfirmation"
            label="Confirm New Password"
            type="password"
          />
        </Form>
      )}
    </div>
  )
}

ResetPasswordPage.redirectAuthenticatedTo = "/"

ResetPasswordPage.getLayout = (page) => <Layout title="パスワードをリセットします">{page}</Layout>

export default ResetPasswordPage
