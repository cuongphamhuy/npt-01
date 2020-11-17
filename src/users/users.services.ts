import { Injectable } from '@nestjs/common';
import { User } from 'src/db/entities/user.entity';

@Injectable()
export class UsersServices {
  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await User.findOne({ where: { username } });
  }
}
