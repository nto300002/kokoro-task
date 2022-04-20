import type { NextApiRequest, NextApiResponse } from "next"
import db from "db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const tasks = await db.task.findMany()
      return res.status(200).json(tasks)
    case "POST":
      const task = await db.task.create({
        data: {
          title: req.body.title,
        },
      })
      return res.status(200).json(task)
    default:
      return res.send("method not allowed")
  }
}
