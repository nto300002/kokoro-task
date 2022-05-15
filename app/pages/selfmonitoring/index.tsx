import { BlitzPage, Link, useRouter, usePaginatedQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getMonitorings from "./queries/getMonitorings"
import Calendar from "app/core/components/atoms/calendar/calendar"
import styles from "app/core/components/atoms/mainContent.module.scss"

const ITEMS_PER_PAGE = 250

const SelfMonitoring: BlitzPage = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ monitorings, hasMore }] = usePaginatedQuery(getMonitorings, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })
  const goToPreviousPage = () => {
    router.push({ query: { page: page - 1 } })
  }
  const goToNextPage = () => {
    router.push({ query: { page: page + 1 } })
  }
  return (
    <div className={styles.content}>
      <main>
        <h1 className={styles.h1}>セルフモニタリング</h1>
      </main>

      <h2 className={styles.h2}>カレンダー</h2>
      <Calendar />
      <h2 className={styles.h2}>今日の調子はどう？</h2>
      {monitorings.map((monitoring) => (
        <div key={monitoring.id}>
          <Link
            href={{
              pathname: "/selfmonitoring/[monitoringId]",
              query: { monitoringId: monitoring.id },
            }}
          >
            <a className={styles.a}>
              <p className={styles.textMap}>
                {JSON.stringify(monitoring.createAt, null, 2)}に作成しました
              </p>
            </a>
          </Link>
        </div>
      ))}
      <Link href="/selfmonitoring/new">
        <a>新しく作る</a>
      </Link>
      <button className={styles.paginaiton} onClick={goToPreviousPage} disabled={page === 0}>
        ＜
      </button>
      <button className={styles.paginaiton} onClick={goToNextPage} disabled={page === 0}>
        ＞
      </button>
    </div>
  )
}

SelfMonitoring.authenticate = { redirectTo: "/auth/notSignIn" }
SelfMonitoring.suppressFirstRenderFlicker = true
SelfMonitoring.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default SelfMonitoring
