import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import getMonitoring from "../../queries/getMonitoring"

const MonitorigGraph = () => {
  const monitoringId = useParam("monitoringId", "number")
  const [monitoring] = useQuery(getMonitoring, { id: monitoringId })

  const data = [
    {
      subject: "今日の調子",
      A: monitoring!.condition_meter,
      fullMark: 100,
    },
    {
      subject: "からだ",
      A: monitoring!.stamina,
      fullMark: 100,
    },
    {
      subject: "こころ",
      A: monitoring!.feeling,
      fullMark: 100,
    },
    {
      subject: "脳のキャパ",
      A: monitoring!.capacity,
      fullMark: 100,
    },
    {
      subject: "イライラ",
      A: monitoring!.stress_meter,
      fullMark: 100,
    },
  ]

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  )
}

export default MonitorigGraph
