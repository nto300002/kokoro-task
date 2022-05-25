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
              <a className={styles.a}>home</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/profile">
              <a className={styles.a}>プロフィール</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/task">
              <a className={styles.a}>タスク</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/selfmonitoring">
              <a className={styles.a}>セルフモニタリング</a>
            </Link>
          </li>
          <li className={styles.list_li}>
            <Link href="/tweet">
              <a className={styles.a}>つぶやき</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
