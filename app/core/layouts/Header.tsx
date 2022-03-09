import { BlitzLayout } from "blitz"
import { Link } from "blitz"
import MenuIcon from "../components/atoms/menu/MenuIcon"
import TitleLogo from "../components/atoms/title/TitleLogo"
import styles from "./styles/Header.module.scss"

const Header: BlitzLayout = () => {
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
        </ul>
      </nav>
    </>
  )
}

export default Header
