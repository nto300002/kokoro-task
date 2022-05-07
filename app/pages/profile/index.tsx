import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import styles from "../core/components/auth/authLogin.module.scss"
import UserProfile from "./components/UserProfile"
import { Suspense } from "react"

const Profile: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <Suspense fallback={<div>loading</div>}>
          <UserProfile />
        </Suspense>
      </main>
    </div>
  )
}

Profile.authenticate = { redirectTo: "/auth/notSignIn" }
Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="プロフィール">{page}</Layout>

export default Profile
