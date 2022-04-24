import { BlitzLayout } from "blitz"
import { Link } from "blitz"
import { Suspense } from "react"
import MenuIcon from "../components/atoms/menu/MenuIcon"
import TitleLogo from "../components/atoms/title/TitleLogo"
import { useCurrentUser } from "../hooks/useCurrentUser"
import styles from "./styles/Header.module.scss"

const Header: BlitzLayout = () => {
  const session = useCurrentUser()
  return (
    <>
      <nav className={styles.headerNav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a className={styles.link}>
                <TitleLogo />
              </a>
            </Link>
          </li>

          <li className={styles.li_right}>
            <MenuIcon />
          </li>
          <li>{session?.email}</li>
        </ul>
      </nav>
    </>
  )
}

export default Header
