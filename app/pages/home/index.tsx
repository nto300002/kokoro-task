import { GlassmorphismAnalogClock } from "app/core/components/atoms/clock/AnalogClock"
import logout from "app/mutations/auth/logout"

import styles from "app/core/components/auth/authLogin.module.scss"
import { Suspense } from "react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useMutation } from "next/data-client"
import Link from "next/link"

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
            <p>{session?.email}</p>
            <p>{session?.role}</p>
          </div>
          <Link href="/task">
            <a>タスク投稿へ　</a>
          </Link>
          <br />
          <Link href="/tweet">
            <a>ちょっとつぶやく</a>
          </Link>
          <button
            className="button small"
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
