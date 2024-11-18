import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/students/student.module';
import { TeacherModule } from './modules/teachers/teacher.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ScoreModule } from './modules/score/score.module';
import { CourseModule } from './modules/course/course.module';
import { ClassModule } from './modules/class/class.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/Guards/jwt.auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    StudentModule, 
    TeacherModule, 
    SubjectModule, 
    ScoreModule,
    CourseModule,
    ClassModule,
    AuthModule, 
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,  // Đăng ký guard toàn cục
    },
  ],
})
export class AppModule {}
