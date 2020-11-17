import { Injectable } from '@nestjs/common';
import { UsersServices } from '../users/users.services';

@Injectable()
export class AuthService {
  constructor(private usersServices: UsersServices) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersServices.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
