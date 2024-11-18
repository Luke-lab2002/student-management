import { Injectable, UnauthorizedException } from "@nestjs/common";
import { TeacherService } from "../teachers/teacher.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService{
    constructor(
        private teacherService: TeacherService,
        private jwtService: JwtService
    ){

    }

    async signIn(
        email: string,
        password: string
    ){
        const teacher = await this.teacherService.getTeacherEmailDB(email);
        if (teacher){
            const isPasswordValid = await bcrypt.compare(password, teacher.password);        
            if (!isPasswordValid) {
                throw new UnauthorizedException();
              }
              else{
                const payload = { sub: teacher.id, username: teacher.name, email: teacher.email };
                return {
                    access_token: await this.jwtService.signAsync(payload),
                    name:teacher.name,
                    email:teacher.email
                }
              }

        }

    }
}