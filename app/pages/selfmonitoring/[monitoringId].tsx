import { BlitzPage, useRouter, useParam, useQuery, useMutation, Head } from "blitz"
import deleteMonitoring from "./mutations/deleteMonitoring"
import updateMonitoring from "./mutations/updateMonitoring"
import getMonitoring from "./queries/getMonitoring"

const MonitoringId: BlitzPage = () => {
  const router = useRouter()
  const monitoringId = useParam("monitoringId", "number")

  const [monitoring] = useQuery(getMonitoring, { id: monitoringId })
  const [updateMonitoringMutation] = useMutation(updateMonitoring)
  const [deleteMonitoringMutation] = useMutation(deleteMonitoring)

  return (
    <div>
      <Head>
        <title>セルフモニタリング</title>
      </Head>
      <div>
        <h1>（id Date）の調子</h1>
        <h2>1:今日の調子はどう？</h2>
        <p>{monitoring!.condition_meter}</p>
        <h2>2:調子の中身を見てみる</h2>
        <p>からだ　{monitoring!.stamina}</p>
        <p>こころ　{monitoring!.feeling}</p>
        <p>脳のキャパ　{monitoring!.capacity}</p>
        <h2>3:イライラはどう？</h2>
        <p>{monitoring!.stress_meter}</p>
        <h2>4:どんなストレスがあった？　具体的に書き込んでみよう！</h2>
        <p>{monitoring!.stress_contents}</p>
        <button
          type="button"
          onClick={async () => {
            if (window.confirm("削除しますか？")) {
              await deleteMonitoringMutation({ id: monitoring!.id })
              router.push({ pathname: "/selfmonitoring" })
            }
          }}
        >
          削除する
        </button>
      </div>
    </div>
  )
}

export default MonitoringId
