import { Controller, Res, Get, Render, Post, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  @Get('/login')
  @Render('auth/login')
  getLogin() {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  postLogin(@Res() res: Response) {
    res.redirect('/dashboard')
  }
}
