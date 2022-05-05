import { BlitzPage, useRouter, useParam, useQuery, useMutation, Head, Link } from "blitz"
import MonitorigGraph from "./components/graph/graph"
import deleteMonitoring from "./mutations/deleteMonitoring"
import updateMonitoring from "./mutations/updateMonitoring"
import getMonitoring from "./queries/getMonitoring"
import EditMonitoring from "./[monitoringId]/edit"

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
        <div>
          <MonitorigGraph />
          <span>調子の中身</span>
        </div>

        <h1>{JSON.stringify(monitoring!.createAt, null, 2)}の調子</h1>
        <h2>1:今日の調子はどう？</h2>
        <p>{monitoring!.condition_meter}%</p>
        <h2>2:調子の中身を見てみる</h2>
        <p>
          からだ　<span>{monitoring!.stamina}%</span>
        </p>
        <p>
          こころ　<span>{monitoring!.feeling}%</span>
        </p>
        <p>
          脳のキャパ　<span>{monitoring!.capacity}%</span>
        </p>
        <h2>3:イライラはどう？</h2>
        <p>{monitoring!.stress_meter}%</p>
        <h2>4:どんなストレスがあった？　具体的に書き込んでみよう！</h2>
        <p>{monitoring!.stress_contents}</p>
        <Link
          href={{
            pathname: "/selfmonitoring/[monitoringId]/edit",
            query: { monitoringId: monitoring!.id },
          }}
        >
          <a>編集する</a>
        </Link>
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
        <br />
        <Link href={{ pathname: "/selfmonitoring" }}>
          <a>一覧に戻る</a>
        </Link>
      </div>
    </div>
  )
}

export default MonitoringId
