import { AuthenticationError, Link, useMutation } from "blitz"
import { FORM_ERROR } from "final-form"
import login from "app/mutations/auth/login"
import Form from "app/core/components/Form"
import { LabeledTextField } from "../LabeledTextField"
import { Login } from "./validations"
import styles from "./SignupForm.module.scss"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>ココロ・タスク</h1>
      <h2 className={styles.h2}>ログイン</h2>

      <Form
        submitText="Login"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            props.onSuccess?.()
          } catch (error) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "申し訳ありません、認証は無効です" }
            } else {
              return {
                [FORM_ERROR]:
                  "申し訳ありません、予期せぬエラーが発生しました。もう一度お試しください。" +
                  error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <div>
          <Link href="/auth/forgot-password">
            <a>パスワードをお忘れの方はこちら</a>
          </Link>
        </div>
      </Form>

      <div style={{ marginTop: "1rem" }}>
        Or
        <Link href="/auth/signup">サインアップ</Link>
      </div>
    </div>
  )
}
