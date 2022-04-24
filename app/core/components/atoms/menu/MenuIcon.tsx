import React, { useState } from "react"
import Menu from "./Menu"
import styles from "./MenuIcon.module.scss"

const MenuIcon = () => {
  const [isMenu, setIsMenu] = useState(false)
  const contentMenu = isMenu
    ? `${styles["menuOpen"]} ${styles["overLay"]} ${styles.moduleMenuIcon}`
    : styles.moduleMenuIcon

  return (
    <>
      <div className={styles.moduleMenuIcon} onClick={() => setIsMenu(!isMenu)}>
        <div className={contentMenu}>
          <span></span>
          <span></span>
          <span></span>
          {isMenu ? <Menu /> : <p></p>}
        </div>
      </div>
    </>
  )
}

export default MenuIcon
