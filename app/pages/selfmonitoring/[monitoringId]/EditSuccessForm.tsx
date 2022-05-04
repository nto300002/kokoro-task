import Link from "next/link"
import { useParam, useQuery } from "blitz"
import React from "react"
import getMonitoring from "../queries/getMonitoring"

const EditsuccessForm = () => {
  const monitoringId = useParam("monitoringId", "number")
  const [monitoring, { setQueryData }] = useQuery(
    getMonitoring,
    { id: monitoringId },
    {
      staleTime: Infinity,
    }
  )
  return (
    <div>
      <br />
      <h1>編集が完了しました</h1>
      <Link
        href={{
          pathname: "/selfmonitoring/[monitoringId]",
          query: { monitoringId: monitoring!.id },
        }}
      >
        <a>元のページに戻る</a>
      </Link>
      <br />
      <Link
        href={{
          pathname: "/selfmonitoring/[monitoringId]/edit",
          query: { monitoringId: monitoring!.id },
        }}
      >
        <a>編集に戻る</a>
      </Link>
      <br />
      <Link href={{ pathname: "/selfmonitoring" }}>
        <a>一覧に戻る</a>
      </Link>
    </div>
  )
}

export default EditsuccessForm
