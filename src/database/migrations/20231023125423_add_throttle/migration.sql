-- CreateTable
CREATE TABLE "Throttle" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Throttle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Throttle" ADD CONSTRAINT "Throttle_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
