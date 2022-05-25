import React from "react"
import styles from "./TitleLogo.module.scss"

const TitleLogo = () => {
  return (
    <div className={styles.animeteTitle_inview}>
      <h1 className={styles.animeteTitle}>
        <span className={styles.alarm}></span>ココロ<span className={styles.space}>__</span>タスク
      </h1>
    </div>
  )
}

export default TitleLogo
