-- DropForeignKey
ALTER TABLE `Teacher` DROP FOREIGN KEY `Teacher_courseId_fkey`;

-- AlterTable
ALTER TABLE `Teacher` MODIFY `courseId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
