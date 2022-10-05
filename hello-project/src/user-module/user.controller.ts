import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userServices.getUsers();
  }

  @Get(':email')
  // getparam
  getOneUser(@Param() email: string): User {
    return this.userServices.getOneUser(email);
  }

  @Post()
  // getBody
  postUser(@Body() user: User): User {
    return this.userServices.addUser(user);
  }

  @Delete(':email')
  deleteUser(@Param() email: string): User[] {
    return this.userServices.deleteUser(email);
  }
}
