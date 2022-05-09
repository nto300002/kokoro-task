import React from "react"
import EditButton from "app/core/components/atoms/button/EditButton"
import styles from "./UserProfile.module.scss"
import { useParam, useQuery, useMutation, Link } from "blitz"
import getProfile from "../queries/getProfile"
import updateProfile from "../mutations/updateProfile"
import Gravatar from "react-gravatar"

const UserProfile = () => {
  const profileId = useParam("profileId", "number")
  const [user, { refetch }] = useQuery(getProfile, { id: profileId })
  const [updateProfileMutation] = useMutation(updateProfile)
  const handleHeart = async (id: number) => {
    try {
      await updateProfileMutation({ id })
      refetch()
    } catch (error) {
      alert(`編集に関するエラーです` + JSON.stringify(error, null, 2))
    }
  }
  return (
    <div className={styles.profilePageContainer}>
      <p className={styles.profileIcon}>
        <Gravatar size={100} email={user.email} />
      </p>
      <ul className={styles.profileList}>
        <li className={styles.userName}>{user.name}</li>
        <li className={styles.userName}>{user.email}</li>
        <li className={styles.userProfile}>{user.profile}</li>
        <li className={styles.userMental}>♥{user.heart}</li>
      </ul>
      <Link href="/profile/edit">
        <a>
          <EditButton />
        </a>
      </Link>
    </div>
  )
}

export default UserProfile
