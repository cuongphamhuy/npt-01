import { Controller, Get } from '@nestjs/common';
import { UserServices } from './user.services';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }
}
