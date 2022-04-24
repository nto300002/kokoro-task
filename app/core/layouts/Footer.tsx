import { BlitzLayout } from "blitz"
import styles from "./styles/Footer.module.scss"

const Footer: BlitzLayout = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>ココロ・タスク</p>
      </footer>
    </>
  )
}

export default Footer
