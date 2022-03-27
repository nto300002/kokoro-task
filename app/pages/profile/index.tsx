import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import styles from "../core/components/auth/authLogin.module.scss"
import UserProfile from "../../core/components/organisms/profile/UserProfile"

const Profile: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <UserProfile />
      </main>
    </div>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="プロフィール">{page}</Layout>

export default Profile
