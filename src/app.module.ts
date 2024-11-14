import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/students/student.module';
import { TeacherModule } from './modules/teachers/teacher.module';

@Module({
  imports: [StudentModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
