/*
  Warnings:

  - You are about to drop the column `amount` on the `AppointmentPayment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AppointmentPayment" DROP COLUMN "amount",
ADD COLUMN     "serviceAmount" DECIMAL(10,2) NOT NULL DEFAULT 0.00;
