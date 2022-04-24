import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [UsersModule, ConfigsModule],
})
export class AppModule {}
