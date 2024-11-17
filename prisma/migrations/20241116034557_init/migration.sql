/*
  Warnings:

  - Added the required column `address` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Teacher` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL;
