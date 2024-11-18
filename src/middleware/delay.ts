
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class delay implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const delay = 50;
    setTimeout(() => {
        next();
    }, delay);
  }
}
