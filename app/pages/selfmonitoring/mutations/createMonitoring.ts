import { resolver } from "blitz"
import z from "zod"
import db from "db"

export const CreateMonitoring = z.object({
  condition_meter: z.number(),
  stamina: z.number(),
  feeling: z.number(),
  capacity: z.number(),
  stress_meter: z.number(),
  stress_contents: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(CreateMonitoring),
  resolver.authorize(),
  async (input) => {
    const monitoring = await db.monitoring.create({
      data: input,
    })

    return monitoring
  }
)
