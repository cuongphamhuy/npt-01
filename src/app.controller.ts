import { Controller, Request, Get, UseGuards, UseFilters } from '@nestjs/common';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AppService } from './app.service';

@Controller()
@UseGuards(AuthenticatedGuard)
@UseFilters(HttpExceptionFilter)
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
