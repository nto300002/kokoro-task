import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import styles from "../core/components/auth/authLogin.module.scss"
import UserProfile from "../../core/components/organisms/profile/UserProfile"
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

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="プロフィール">{page}</Layout>

export default Profile
