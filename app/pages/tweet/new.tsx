import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createTweet from "./mutations/createTweet"
import { TweetForm } from "./components/TweetForm"
import { createTweetSchema } from "./validations"

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
            router.push(Routes.NewTweetPage({ tweetId: tweet.id }))
          } catch (error: any) {
            alert("errorです")
          }
        }}
      />
    </div>
  )
}

NewTweetPage.suppressFirstRenderFlicker = true
NewTweetPage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default NewTweetPage
