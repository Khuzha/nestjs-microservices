import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigsService } from './configs/configs.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(new ConfigsService().get('port'));
}

bootstrap();
