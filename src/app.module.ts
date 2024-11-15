import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/students/student.module';
import { TeacherModule } from './modules/teachers/teacher.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ScoreModule } from './modules/score/score.module';
import { CourseModule } from './modules/course/course.module';
import { ClassModule } from './modules/class/class.module';

@Module({
  imports: [
    StudentModule, 
    TeacherModule, 
    SubjectModule, 
    ScoreModule,
    CourseModule,
    ClassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
