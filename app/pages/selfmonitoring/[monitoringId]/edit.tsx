import { FORM_ERROR } from "app/core/components/Form"
import { useMutation, useQuery, useParam, useRouter, Head, Link } from "blitz"
import { MonitoringForm } from "../components/monitoringForm"
import updateMonitoring from "../mutations/updateMonitoring"
import getMonitoring from "../queries/getMonitoring"
import styles from "app/core/components/atoms/mainContent.module.scss"

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
    <div className={styles.content}>
      <div>
        <h1 className={styles.h1}>データを編集する</h1>
        <MonitoringForm
          submitText="updateMonitoring"
          initialValues={monitoring!}
          onSubmit={async (values) => {
            try {
              const updated = await updateMonitoringMutation({
                id: monitoring?.id,
                ...values,
              })
              await setQueryData(updated)
              router.push({
                pathname: "/selfmonitoring/[monitoringId]/EditSuccessForm",
                query: { monitoringId: monitoring!.id },
              })
            } catch (error: any) {
              console.error(error)
            }
            return {
              [FORM_ERROR]: "ツマミを変更してください",
            }
          }}
        />
      </div>
      <Link href={{ pathname: "/selfmonitoring" }}>
        <a>一覧に戻る</a>
      </Link>
      <br />
      <Link
        href={{
          pathname: "/selfmonitoring/[monitoringId]",
          query: { monitoringId: monitoring!.id },
        }}
      >
        <a>前のページに戻る</a>
      </Link>
    </div>
  )
}

export default EditMonitoring
