import { BlitzPage, Link, useRouter, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { createMonitoringSchema } from "./validations"
import createMonitoring from "./mutations/createMonitoring"
import { FORM_ERROR } from "app/core/components/Form"
import { MonitoringForm } from "./components/monitoringForm"

const NewSelfMonitoring: BlitzPage = () => {
  const router = useRouter()
  const [createMonitoringMutation] = useMutation(createMonitoring)
  return (
    <div className="container">
      <main>
        <h1>セルフモニタリング</h1>
      </main>
      <h1>新しく作る</h1>

      <MonitoringForm
        submitText="Create SelfMonitoring"
        schema={createMonitoringSchema}
        initialValues={{
          stress_contents: "",
          condition_meter: 50,
          stamina: 50,
          feeling: 50,
          capacity: 50,
          stress_meter: 50,
        }}
        onSubmit={async (values) => {
          try {
            const monitoring = await createMonitoringMutation(values)
            router.push({ pathname: "/selfmonitoring" })
            return monitoring
          } catch (error: any) {
            console.error(error)
          }
          return {
            [FORM_ERROR]: "すべて入力してください",
          }
        }}
      />
    </div>
  )
}

NewSelfMonitoring.authenticate = { redirectTo: "/auth/notSignIn" }
NewSelfMonitoring.suppressFirstRenderFlicker = true
NewSelfMonitoring.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default NewSelfMonitoring
