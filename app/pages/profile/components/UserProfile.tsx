import React from "react"
import Button from "app/core/components/atoms/button/Button"
import styles from "./UserProfile.module.scss"
import textStyles from "app/core/components/atoms/mainContent.module.scss"
import { useParam, useQuery, useMutation, Link } from "blitz"
import getProfile from "../queries/getProfile"
import Gravatar from "react-gravatar"

const UserProfile = () => {
  const profileId = useParam("profileId", "number")
  const [user, { refetch }] = useQuery(getProfile, { id: profileId })
  return (
    <div className={textStyles.content}>
      <h1 className={textStyles.h2}>プロフィール</h1>
      <p className={styles.profileIcon}>
        <Gravatar size={100} email={user.email} />
      </p>
      <ul className={styles.profileList}>
        <p>ユーザー</p>
        <li className={textStyles.textMap}>{user.name}</li>
        <p>メールアドレス</p>
        <li className={textStyles.textMap}>{user.email}</li>
        <p>プロフィール</p>
        <li className={textStyles.textMap}>{user.profile}</li>
      </ul>
      <Link href="/profile/edit">
        <a>
          <Button>edit</Button>
        </a>
      </Link>
    </div>
  )
}

export default UserProfile
