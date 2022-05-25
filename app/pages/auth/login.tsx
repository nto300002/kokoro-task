import { useRouter, BlitzPage } from "blitz"
import { LoginForm } from "app/core/components/authForm/LoginForm"
import Layout from "app/core/layouts/Layout"
import { Suspense } from "react"
import styles from "app/core/components/atoms/mainContent.module.scss"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className={styles.content}>
      <Suspense fallback={<div>loading...</div>}>
        <LoginForm
          onSuccess={() => {
            const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
            router.push(next)
          }}
        />
      </Suspense>
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
