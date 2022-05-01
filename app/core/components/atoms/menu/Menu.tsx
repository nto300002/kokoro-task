import React from "react"
import styles from "./Menu.module.scss"
import { Link } from "blitz"

const Menu = () => {
  return (
    <div className={styles.contents}>
      <nav className={styles.list_nav}>
        <ul className={styles.list_ul}>
          <li className={styles.list_li}>
            <Link href="/">
              <a className={styles.list_href}>home</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/profile">
              <a className={styles.list_href}>プロフィール</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/task">
              <a className={styles.list_href}>タスク</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/selfmonitoring">
              <a className={styles.list_href}>セルフモニタリング</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/tweet">
              <a className={styles.list_href}>つぶやき</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
