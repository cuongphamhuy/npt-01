import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { AppService } from './app.service';

@Controller()
@UseGuards(AuthenticatedGuard)
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/profile')
  async getProfile(@Request() req) {
    return req.user
  }
}
