/*
  Warnings:

  - You are about to drop the column `body` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `text` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "body",
ADD COLUMN     "text" TEXT NOT NULL;
