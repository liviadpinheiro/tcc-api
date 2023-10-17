/*
  Warnings:

  - Added the required column `imagePosition` to the `Deck` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deck" ADD COLUMN     "imagePosition" TEXT NOT NULL;
