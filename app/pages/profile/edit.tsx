import styles from "app/core/components/atoms/mainContent.module.scss"
import { Head, useRouter, useQuery, useMutation, useParam } from "blitz"
import getProfile from "./queries/getProfile"
import updateProfile from "./mutations/updateProfile"
import ProfileForm from "./components/ProfileForm"
import { FORM_ERROR } from "app/core/components/Form"

const EditProfile = () => {
  const router = useRouter()
  const profileId = useParam("profileId", "number")
  const [user, { setQueryData }] = useQuery(
    getProfile,
    { id: profileId },
    {
      staleTime: Infinity,
    }
  )
  const [updateProfileMutation] = useMutation(updateProfile)

  return (
    <>
      <Head>
        <title>プロフィール編集中</title>
      </Head>
      <div className={styles.content}>
        <h1 className={styles.h2}>プロフィール編集中</h1>
        <p className={styles.textMap}>名前　{user.name}</p>
        <p className={styles.textMap}>メールアドレス　{user.email}</p>
        <p className={styles.textMap}>プロフィール　{user.profile}</p>
        <ProfileForm
          submitText="Update Profile"
          initialValues={user}
          onSubmit={async (values) => {
            try {
              const updated = await updateProfileMutation({
                id: user.id,
                ...values,
              })
              await setQueryData(updated)
              router.push({ pathname: "/profile" })
            } catch (error: any) {
              console.error(error)
            }
            return {
              [FORM_ERROR]: "すべて入力してください",
            }
          }}
        />
      </div>
    </>
  )
}

export default EditProfile
