/*
  Warnings:

  - Added the required column `body` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "body" TEXT NOT NULL;