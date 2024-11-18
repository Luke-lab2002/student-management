import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service'; // Đảm bảo đường dẫn đúng
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Trích xuất Bearer token từ Authorization header
      secretOrKey: jwtConstants.secret, // Đảm bảo đây là khóa bí mật của bạn
    });
  }

  async validate(payload: any) {
    // Bạn có thể lấy thông tin người dùng từ payload và trả lại
    // payload thường có các trường như sub (subject) hoặc userId
    return { Id: payload.sub, username: payload.username, email:payload.email };
  }
}
