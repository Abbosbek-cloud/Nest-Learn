import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile() {
    return this.userService.profile();
  }

  @Get('resetPassword')
  resetPassword() {
    return this.userService.resetPassword();
  }
}
