import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './entities/user.entity';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  findMany(): Observable<Array<User>> {
    return this.client.send<Array<User>>({ cmd: 'findMany' }, {});
  }
}
