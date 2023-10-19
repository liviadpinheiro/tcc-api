/*
  Warnings:

  - You are about to drop the column `cardId` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Notes` table. All the data in the column will be lost.
  - Added the required column `card_id` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_cardId_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_userId_fkey";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "cardId",
DROP COLUMN "userId",
ADD COLUMN     "card_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "card_user_index" ON "Notes"("card_id", "user_id");

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
