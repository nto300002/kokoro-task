import { BlitzPage, useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { ForgotPassword } from "app/core/components/auth/validations"
import forgotPassword from "app/mutations/auth/forgotPassword"
import Layout from "app/core/layouts/Layout"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <div>
      <h1>パスワードの再設定をしますか？</h1>

      {isSuccess ? (
        <div>
          <h2>リクエストを送信しました</h2>
          <p>
            {" "}
            お客様のEメールアドレスがシステム内にある場合は、こちらからご案内いたします。
            パスワードを再設定してください。
          </p>
        </div>
      ) : (
        <Form
          submitText="パスワードの再設定を送信します"
          schema={ForgotPassword}
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            try {
              await forgotPasswordMutation(values)
            } catch (error) {
              return {
                [FORM_ERROR]: "すみません　予期せぬエラーが発生しました　もう一度お願いします",
              }
            }
          }}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </div>
  )
}
