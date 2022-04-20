/*
  Warnings:

  - You are about to drop the `Emotion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `emotion` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/


-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "emotion" TEXT NOT NULL;


