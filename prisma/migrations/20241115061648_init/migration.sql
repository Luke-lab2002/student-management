-- DropForeignKey
ALTER TABLE `Score` DROP FOREIGN KEY `Score_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `Score` DROP FOREIGN KEY `Score_subjectId_fkey`;

-- AlterTable
ALTER TABLE `Score` MODIFY `studentId` INTEGER NULL,
    MODIFY `subjectId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
