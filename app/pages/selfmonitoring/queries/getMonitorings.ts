import { paginate, resolver } from "blitz"
import z from "zod"
import db, { Prisma } from "db"

interface GetMonitoringsInput
  extends Pick<Prisma.MonitoringFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetMonitoringsInput) => {
    const {
      items: monitorings,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.monitoring.count({ where }),
      query: (paginateArgs) => db.monitoring.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      monitorings,
      nextPage,
      hasMore,
      count,
    }
  }
)
