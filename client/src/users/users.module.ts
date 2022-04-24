import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersController } from './users.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USERS_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}
