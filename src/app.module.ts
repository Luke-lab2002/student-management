import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teachers/teacher.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ScoreModule } from './modules/score/score.module';
import { CourseModule } from './modules/course/course.module';
import { ClassModule } from './modules/class/class.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/guard/jwt.auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { delay } from './middleware/delay';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(delay)
    .forRoutes("*")
  }
}
