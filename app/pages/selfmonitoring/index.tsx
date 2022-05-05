import { BlitzPage, Link, useRouter, usePaginatedQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getMonitorings from "./queries/getMonitorings"
import { makeDocument } from "@prisma/client/runtime"
import Calendar from "app/core/components/atoms/calendar/calendar"

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
    <div className="container">
      <main>
        <h1>セルフモニタリング</h1>
      </main>

      <span>カレンダー</span>
      <Calendar />
      <p>今日の調子はどう？</p>
      {monitorings.map((monitoring) => (
        <div key={monitoring.id}>
          <Link
            href={{
              pathname: "/selfmonitoring/[monitoringId]",
              query: { monitoringId: monitoring.id },
            }}
          >
            <a>{JSON.stringify(monitoring.createAt, null, 2)}に作成しました</a>
          </Link>
        </div>
      ))}
      <Link href="/selfmonitoring/new">
        <a>新しく作る</a>
      </Link>
      <button onClick={goToPreviousPage} disabled={page === 0}>
        ＜
      </button>
      <button onClick={goToNextPage} disabled={page === 0}>
        ＞
      </button>
    </div>
  )
}

SelfMonitoring.authenticate = { redirectTo: "/auth/notSignIn" }
SelfMonitoring.suppressFirstRenderFlicker = true
SelfMonitoring.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default SelfMonitoring
