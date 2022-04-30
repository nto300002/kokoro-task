/*
  Warnings:

  - You are about to drop the column `comment` on the `Tweet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "comment";

-- CreateTable
CREATE TABLE "TweetComment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "tweetId" INTEGER NOT NULL,

    CONSTRAINT "TweetComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TweetComment" ADD CONSTRAINT "TweetComment_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
