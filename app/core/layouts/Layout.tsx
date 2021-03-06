import { Head, BlitzLayout } from "blitz"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./styles/Container.module.scss"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <Head>
            <title>{title || "supportive-push"}</title>
          </Head>
          <Header />
          <div className={styles.container}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
