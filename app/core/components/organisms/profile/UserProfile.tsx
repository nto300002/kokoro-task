import React from "react"
import EditButton from "../../atoms/button/EditButton"
import styles from "./UserProfile.module.scss"

const UserProfile = () => {
  return (
    <div className={styles.profilePageContainer}>
      <p className={styles.profileIcon}>icon</p>
      <ul className={styles.profileList}>
        <li className={styles.userName}>name</li>
        <li className={styles.userProfile}>profile</li>
        <li className={styles.userMental}>kokoro</li>
      </ul>
      <EditButton />
    </div>
  )
}

export default UserProfile
