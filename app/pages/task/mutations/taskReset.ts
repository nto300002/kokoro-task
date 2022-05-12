import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const TaskReset = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(TaskReset),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const task = await db.task.update({
      where: { id },
      data: {
        done: false,
      },
    })
    return task
  }
)
