import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigsModule } from './configs/configs.module';
import { ConfigsService } from './configs/configs.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [UsersModule, ConfigsModule],
  controllers: [UsersController],
  providers: [
    ConfigsService,
    {
      provide: 'USERS_SERVICE',
      useFactory: (configsService: ConfigsService) => {
        const usersServiceOptions = configsService.get('usersService');
        return ClientProxyFactory.create(usersServiceOptions);
      },
      inject: [ConfigsService],
    },
  ],
})
export class AppModule {}
