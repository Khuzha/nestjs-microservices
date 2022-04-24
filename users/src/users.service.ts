import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: Array<User> = [
    { name: 'Sardor', age: 21 },
    { name: 'Khuzha', age: 19 },
  ];

  findMany(): Array<User> {
    return this.users;
  }
}
