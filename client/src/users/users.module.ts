import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { UsersController } from './users.controller';
import { ConfigsService } from '../configs/configs.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        ...new ConfigsService().getServiceOptions('users'),
      },
    ]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}
