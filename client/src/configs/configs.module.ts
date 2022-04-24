import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';

@Module({
  providers: [ConfigsService],
  exports: [ConfigsService],
})
export class ConfigsModule {}
