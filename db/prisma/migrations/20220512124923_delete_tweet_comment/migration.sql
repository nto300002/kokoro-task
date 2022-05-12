/*
  Warnings:

  - You are about to drop the column `exp` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `exp` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `TweetComment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TweetComment" DROP CONSTRAINT "TweetComment_tweetId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "exp";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "exp";

-- DropTable
DROP TABLE "TweetComment";
