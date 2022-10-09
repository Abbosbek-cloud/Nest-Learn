import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(): String {
    return 'I signed up';
  }

  @Post('login')
  login(): String {
    return 'I signed in';
  }
}
