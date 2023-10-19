/*
  Warnings:

  - You are about to drop the column `card_id` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Notes` table. All the data in the column will be lost.
  - Added the required column `cardId` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_card_id_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_user_id_fkey";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "card_id",
DROP COLUMN "user_id",
ADD COLUMN     "cardId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
