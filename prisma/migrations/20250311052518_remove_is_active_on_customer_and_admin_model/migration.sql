/*
  Warnings:

  - You are about to drop the column `isActive` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "isActive";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "isActive";
