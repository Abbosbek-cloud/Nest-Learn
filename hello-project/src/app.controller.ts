import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  @Header('Cache-control', 'none')
  getHello(@Req() request: string): string {
    return this.appService.getHello();
  }
}
