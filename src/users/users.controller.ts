import { Controller, Get } from '@nestjs/common';
import { UsersServices } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersServices) {}

  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }
}
