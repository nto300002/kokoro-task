import { useMutation, useQuery, useParam, useRouter, Head } from "blitz"
import { MonitoringForm } from "../components/monitoringForm"
import updateMonitoring from "../mutations/updateMonitoring"
import getMonitoring from "../queries/getMonitoring"

const EditMonitoring = () => {
  const router = useRouter()
  const monitoringId = useParam("monitoringId", "number")
  const [monitoring, { setQueryData }] = useQuery(
    getMonitoring,
    { id: monitoringId },
    {
      staleTime: Infinity,
    }
  )
  const [updateMonitoringMutation] = useMutation(updateMonitoring)

  return (
    <div>
      <Head>
        <title>編集する</title>
      </Head>
      <div>
        <h1>データを編集する</h1>
        {/* <MonitoringForm 
          submitText="updateMonitoring"
          initialValues={!monitoring} */}
      </div>
    </div>
  )
}

export default EditMonitoring
