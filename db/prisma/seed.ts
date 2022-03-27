export {}

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const seed = async () => {
  // prisma upserts

  process.exit(0)
}
seed()
