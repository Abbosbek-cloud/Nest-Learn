import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile() {
    return this.userService.profile();
  }

  @Get('resetPassword/:id')
  @Redirect('https://docs.nestjs.com', 300)
  resetPassword(@Query('version') version) {
    if (version && version === 5) {
      return this.userService.resetPassword(version);
    }
  }
}
