import { BlitzLayout } from "blitz"
import { Link } from "blitz"
import MenuIcon from "../components/atoms/menu/MenuIcon"
import styles from "./styles/Header.module.scss"

const Header: BlitzLayout = () => {
  return (
    <>
      <MenuIcon />
      <nav className={styles.headerNav}>
        <ul className={styles.headerUl}>
          <li className={styles.headerLi}>ココロ・タスク</li>
          <li className={styles.headerLi}>
            <Link href="/">
              <a className={styles.headerHref}>home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className={styles.headerHref}>プロフィール</a>
            </Link>
          </li>
          <li>
            <Link href="/task">
              <a className={styles.headerHref}>タスク</a>
            </Link>
          </li>
          <li>
            <Link href="/timeline">
              <a className={styles.headerHref}>タイムライン</a>
            </Link>
          </li>
          <li>
            <Link href="/tweet">
              <a className={styles.headerHref}>つぶやき</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
