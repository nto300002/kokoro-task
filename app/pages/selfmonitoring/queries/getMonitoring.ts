import { resolver } from "blitz"
import z from "zod"
import db from "db"

const GetMonitoring = z.object({
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetMonitoring), resolver.authorize(), async ({ id }) => {
  const monitoring = await db.monitoring.findFirst({
    where: { id },
  })
  return monitoring
})
