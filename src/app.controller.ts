import { Controller, Request, Res, Post, Get, UseGuards, Render } from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/auth/login')
  @Render('auth/login')
  root() {
    return { message: 'hello world' }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  login(@Res() res: Response) {
    res.redirect('/profile')
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    return req.user
  }
}
