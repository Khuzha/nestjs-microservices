import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigsService {
  private readonly configs: Record<string, any>;
  private readonly servicesOptions: Record<string, ClientOptions>;

  constructor() {
    this.configs = {};
    this.servicesOptions = {};
    this.configs.port = process.env.CLIENT_INTERNAL_PORT;
    this.servicesOptions.users = {
      options: {
        urls: [process.env.USERS_RABBITMQ_URL],
        queue: process.env.USERS_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
      transport: Transport.RMQ,
    };
  }

  get(key: string) {
    return this.configs[key];
  }

  getServiceOptions(key: string): ClientOptions {
    return this.servicesOptions[key];
  }
}
