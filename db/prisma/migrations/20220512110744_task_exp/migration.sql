/*
  Warnings:

  - You are about to drop the `Heart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Heart" DROP CONSTRAINT "Heart_taskId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "exp" INTEGER;

-- DropTable
DROP TABLE "Heart";
