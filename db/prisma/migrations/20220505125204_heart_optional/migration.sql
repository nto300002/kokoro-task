-- AlterTable
ALTER TABLE "users" ALTER COLUMN "heart" DROP NOT NULL,
ALTER COLUMN "heart" SET DEFAULT 0;
