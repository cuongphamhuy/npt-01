import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDashboard(): string {
    return 'Hello World!';
  }
}
