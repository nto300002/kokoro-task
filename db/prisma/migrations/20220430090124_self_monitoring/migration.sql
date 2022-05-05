-- CreateTable
CREATE TABLE "Monitoring" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "condition_meter" INTEGER NOT NULL DEFAULT 50,
    "stamina" INTEGER NOT NULL DEFAULT 50,
    "feeling" INTEGER NOT NULL DEFAULT 50,
    "capacity" INTEGER NOT NULL DEFAULT 50,
    "stress_meter" INTEGER NOT NULL DEFAULT 50,
    "stress_contents" TEXT NOT NULL,

    CONSTRAINT "Monitoring_pkey" PRIMARY KEY ("id")
);
