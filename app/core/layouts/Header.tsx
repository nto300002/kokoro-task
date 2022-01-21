import { BlitzLayout } from "blitz"
import { Link } from "blitz"
import styles from "./styles/Header.module.scss"

const Header: BlitzLayout = () => {
  return (
    <>
      <nav className={styles.headerNav}>
        <ul className={styles.headerUl}>
          <li className={styles.headerLi}>まいにち名言</li>
          <li className={styles.headerLi}>
            <Link href="/">
              <a className={styles.headerHref}>home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className={styles.headerHref}>profile</a>
            </Link>
          </li>
          <li>
            <Link href="/management">
              <a className={styles.headerHref}>management</a>
            </Link>
          </li>
          <li>
            <Link href="/meigen">
              <a className={styles.headerHref}>meigen</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
