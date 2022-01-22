import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Profile: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>プロフィール</h1>
        <p>aaaaaaaa</p>
      </main>
    </div>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Profile
