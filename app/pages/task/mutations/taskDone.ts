import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const TaskDone = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(TaskDone),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const task = await db.task.update({
      where: { id },
      data: {
        done: true,
      },
    })
    return task
  }
)
