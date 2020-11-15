import { Injectable } from '@nestjs/common';
import { User } from 'src/db/entities/user.entity';

@Injectable()
export class UserServices {
  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }
}
