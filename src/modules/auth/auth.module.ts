import { Module } from "@nestjs/common";
import { TeacherModule } from "../teachers/teacher.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./strategy/auth.strategy";


@Module({
    imports:[TeacherModule, 
        JwtModule.register({
            global:true,
            secret:process.env.SCRET_KEY,
            signOptions:{expiresIn:"3600s"}
        })
    ],
    controllers:[AuthController],
    providers:[AuthService, JwtStrategy]
})

export class AuthModule{}