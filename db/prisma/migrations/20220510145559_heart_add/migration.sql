/*
  Warnings:

  - You are about to drop the column `exp` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "exp";

-- CreateTable
CREATE TABLE "Heart" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "exp" INTEGER,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "Heart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Heart" ADD CONSTRAINT "Heart_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
