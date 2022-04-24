import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigsModule } from './configs/configs.module';
import { ConfigsService } from './configs/configs.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [UsersModule, ConfigsModule],
  // providers: [
  //   ConfigsService,
  //   {
  //     provide: 'USERS_SERVICE',
  //     useFactory: (configsService: ConfigsService) => {
  //       const usersServiceOptions = configsService.get('usersService');
  //       console.log('usersServiceOptions', usersServiceOptions);
  //       const result = ClientProxyFactory.create(usersServiceOptions);
  //       console.log('result', result);
  //       return result;
  //     },
  //     inject: [ConfigsService],
  //   }
  // ]
})
export class AppModule {}
