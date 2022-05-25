import { GlassmorphismAnalogClock } from "app/core/components/atoms/clock/AnalogClock"
import logout from "app/mutations/auth/logout"
import textStyle from "app/core/components/atoms/mainContent.module.scss"
import styles from "app/core/components/authForm/authLogin.module.scss"
import { Suspense } from "react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useMutation } from "next/data-client"
import Link from "next/link"
import buttonStyle from "app/core/components/atoms/button/Button.module.scss"

export default function Home() {
  const session = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  return (
    <div className={styles.body}>
      <Suspense fallback={<div>loading</div>}>
        <GlassmorphismAnalogClock />
        <div className={styles.container}>
          <h2 className={styles.h2}>サインインしています</h2>
          <div>
            <p className={textStyle.textMap}>Email:{session?.email}</p>
          </div>
          <Link href="/task">
            <a className={textStyle.a}>タスク投稿へ　</a>
          </Link>
          <br />
          <Link href="/tweet">
            <a className={textStyle.a}>ちょっとつぶやく</a>
          </Link>
          <br />
          <button
            className={buttonStyle.Button}
            onClick={async () => {
              await logoutMutation()
            }}
          >
            Logout
          </button>
        </div>
      </Suspense>
    </div>
  )
}

Home.authenticate = { redirectTo: "/auth/signIn" }
