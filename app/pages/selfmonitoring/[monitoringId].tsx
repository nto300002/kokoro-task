import { BlitzPage, useRouter, useParam, useQuery, useMutation, Head, Link } from "blitz"
import MonitorigGraph from "./components/graph/graph"
import deleteMonitoring from "./mutations/deleteMonitoring"
import updateMonitoring from "./mutations/updateMonitoring"
import getMonitoring from "./queries/getMonitoring"
import styles from "app/core/components/atoms/mainContent.module.scss"
import Button from "app/core/components/atoms/button/Button"
import buttonStyle from "app/core/components/atoms/button/Button.module.scss"

const MonitoringId: BlitzPage = () => {
  const router = useRouter()
  const monitoringId = useParam("monitoringId", "number")

  const [monitoring] = useQuery(getMonitoring, { id: monitoringId })
  const [updateMonitoringMutation] = useMutation(updateMonitoring)
  const [deleteMonitoringMutation] = useMutation(deleteMonitoring)

  return (
    <div className={styles.content}>
      <Head>
        <title>セルフモニタリング</title>
      </Head>
      <div>
        <div className={styles.figure}>
          <MonitorigGraph />
          <span className={styles.comment}>図：調子の中身</span>
        </div>

        <h1 className={styles.h1}>
          今日の調子
          <span className={styles.span}>--{JSON.stringify(monitoring!.createAt, null, 2)}</span>
        </h1>

        <h2 className={styles.h2}>1:今日の調子はどう？</h2>
        <p className={styles.textMap}>{monitoring!.condition_meter}%</p>
        <h2 className={styles.h2}>2:調子の中身を見てみる</h2>
        <p className={styles.textMap}>
          からだ　<span>{monitoring!.stamina}%</span>
        </p>
        <p className={styles.textMap}>
          こころ　<span>{monitoring!.feeling}%</span>
        </p>
        <p className={styles.textMap}>
          脳のキャパ　<span>{monitoring!.capacity}%</span>
        </p>
        <h2 className={styles.h2}>3:イライラはどう？</h2>
        <p className={styles.textMap}>{monitoring!.stress_meter}%</p>
        <h2 className={styles.h2}>4:どんなストレスがあった？　具体的に書き込んでみよう！</h2>
        <p className={styles.textMap}>{monitoring!.stress_contents}</p>
        <Link
          href={{
            pathname: "/selfmonitoring/[monitoringId]/edit",
            query: { monitoringId: monitoring!.id },
          }}
        >
          <a>
            <Button>編集する</Button>
          </a>
        </Link>
        <button
          className={buttonStyle.Button}
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
