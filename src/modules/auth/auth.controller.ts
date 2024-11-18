import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Get, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/auth.dto";


@Controller("auth")
export class AuthController{
    constructor(private readonly authService:AuthService){

    }
    @HttpCode(HttpStatus.OK)
    @Post("/login")
    signIn(@Body() signIndto:AuthDTO){
        return this.authService.signIn(signIndto.email, signIndto.password);
    }

    @Get('profile')
    getProfile(@Request() req): any {
      return req.teacher;
    }
}