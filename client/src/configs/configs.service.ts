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
        host: process.env.USERS_HOST,
        port: +process.env.USERS_INTERNAL_PORT,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string) {
    return this.configs[key];
  }

  getServiceOptions(key: string): ClientOptions {
    return this.servicesOptions[key];
  }
}
