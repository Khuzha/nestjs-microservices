import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private users: Array<User> = [
    { name: 'Sardor', age: 21 },
    { name: 'Khuzha', age: 19 },
  ]

  findAll(): Array<User> {
    return this.users;
  }
}
