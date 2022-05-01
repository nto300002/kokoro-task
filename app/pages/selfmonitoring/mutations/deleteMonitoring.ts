import { resolver } from "blitz"
import z from "zod"
import db from "db"

const DeleteMonitoring = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteMonitoring),
  resolver.authorize(),
  async ({ id }) => {
    const monitoring = await db.monitoring.deleteMany({ where: { id } })

    return monitoring
  }
)
