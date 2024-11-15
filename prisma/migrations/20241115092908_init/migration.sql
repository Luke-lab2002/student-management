-- DropForeignKey
ALTER TABLE `Class` DROP FOREIGN KEY `Class_courseId_fkey`;

-- AlterTable
ALTER TABLE `Class` MODIFY `courseId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
