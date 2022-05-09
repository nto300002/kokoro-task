import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
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
      <div>
        <h1>プロフィール編集中</h1>
        <p>名前　{user.name}</p>
        <p>メールアドレス　{user.email}</p>
        <p>プロフィール　{user.profile}</p>
        <p>♥ {user.heart}</p>
      </div>
      <div>
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
