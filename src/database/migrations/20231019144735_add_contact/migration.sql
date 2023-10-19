/*
  Warnings:

  - You are about to drop the `Testimonials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Testimonials";

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT,
    "theme" TEXT NOT NULL,
    "isValidTestimonial" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
