import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/students/student.module';
import { TeacherModule } from './modules/teachers/teacher.module';
import { SubjectModule } from './modules/subject/subject.module';

@Module({
  imports: [StudentModule, TeacherModule, SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
