import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'findMany' })
  findOne(): Array<User> {
    return this.usersService.findMany();
  }
}
