import { resolver } from "blitz"
import z from "zod"
import db from "db"

const DeleteMonitoring = z.object({
  id: z.number(),
  condition_meter: z.number(),
  stamina: z.number(),
  feeling: z.number(),
  capacity: z.number(),
  stress_meter: z.number(),
  stress_contents: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(DeleteMonitoring),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const monitoring = await db.monitoring.update({
      where: { id },
      data: {
        ...data,
      },
    })

    return monitoring
  }
)
