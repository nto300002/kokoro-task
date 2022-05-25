import { Suspense } from "react"
import { Link, BlitzPage, useMutation, useRouter, Routes } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/mutations/auth/logout"
import SignupForm from "app/core/components/authForm/SignupForm"
import styles from "app/core/components/atoms/mainContent.module.scss"
import authStyles from "app/core/components/authForm/SignupForm.module.scss"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  const router = useRouter()

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
          <br />
          User name: <code>{currentUser.name}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <SignupForm onSuccess={() => router.push(Routes.Home())} />
        </Suspense>

        <p className={styles.h2}>ログイン</p>
        <Link href="/auth/login">
          <a className={authStyles.login}>
            <strong>Login</strong>
          </a>
        </Link>
        <a href="/api/auth/google" className={authStyles.googleAuth}>
          <strong>GoogleLogin</strong>
        </a>
      </>
    )
  }
}

const SignIn: BlitzPage = () => {
  return (
    <div className={styles.content}>
      <main>
        <div className="buttons" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>

        <div className="buttons" style={{ marginTop: "5rem" }}></div>
      </main>
    </div>
  )
}

SignIn.suppressFirstRenderFlicker = true

export default SignIn
