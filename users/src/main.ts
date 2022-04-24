import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.USERS_RABBITMQ_URL],
        queue: process.env.USERS_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen();
}

bootstrap();
