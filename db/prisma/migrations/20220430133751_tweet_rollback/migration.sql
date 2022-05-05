-- CreateTable
CREATE TABLE "TweetComment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tweetId" INTEGER NOT NULL,

    CONSTRAINT "TweetComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TweetComment" ADD CONSTRAINT "TweetComment_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
