import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

const Default: BlitzPage = () => {
  return <div className="container">...Loading</div>
}

/** ログインしていない場合 */
Default.authenticate = { redirectTo: "/auth/signIn" }
/** ログインしている場合 */
Default.redirectAuthenticatedTo = "/home"

const defaultLayout = (page) => <Layout>{page}</Layout>
Default.getLayout = defaultLayout

export default Default
