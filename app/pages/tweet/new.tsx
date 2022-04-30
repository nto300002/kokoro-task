import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createTweet from "./mutations/createTweet"
import { TweetForm } from "./components/TweetForm"
import { createTweetSchema } from "./validations"
import { FORM_ERROR } from "app/core/components/Form"
import error from "next/error"

const NewTweetPage: BlitzPage = () => {
  const router = useRouter()
  const [createTweetMutation] = useMutation(createTweet)

  return (
    <div>
      <p>つぶやく</p>

      <TweetForm
        submitText="つぶやいてみる"
        schema={createTweetSchema}
        initialValues={{ text: "" }}
        onSubmit={async (values) => {
          try {
            const tweet = await createTweetMutation(values)
            router.push({ pathname: "/tweet" })
            return tweet
          } catch (error: any) {
            console.error(error)
          }
          return {
            [FORM_ERROR]: "すべての項目を入力してください",
          }
        }}
      />
      <Link href="/tweet">
        <a>つぶやき一覧に戻る</a>
      </Link>
    </div>
  )
}

NewTweetPage.suppressFirstRenderFlicker = true
NewTweetPage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default NewTweetPage
