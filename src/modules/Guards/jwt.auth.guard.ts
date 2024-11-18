import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
      }
    
      canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const isLoginRoute = request.url.includes('/auth/login');
    
        if (isLoginRoute) {
          return true;
        }
    
        return super.canActivate(context);
      }
}
