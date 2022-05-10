/*
  Warnings:

  - You are about to drop the column `userId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `concentration_time_total` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `heart` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "userId",
ADD COLUMN     "exp" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "concentration_time_total",
DROP COLUMN "heart",
DROP COLUMN "icon";
