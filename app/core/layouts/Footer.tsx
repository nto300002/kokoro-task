import { BlitzLayout } from "blitz"
import styles from "./styles/Footer.module.scss"

const Footer: BlitzLayout = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Blitz.js
        </a>
      </footer>
    </>
  )
}

export default Footer
