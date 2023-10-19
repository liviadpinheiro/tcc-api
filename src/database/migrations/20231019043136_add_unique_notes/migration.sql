/*
  Warnings:

  - A unique constraint covering the columns `[card_id,user_id]` on the table `Notes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "card_user_index";

-- CreateIndex
CREATE UNIQUE INDEX "Notes_card_id_user_id_key" ON "Notes"("card_id", "user_id");
