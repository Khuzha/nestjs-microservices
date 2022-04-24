import { Injectable } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigsService {
  private readonly configs: Record<string, any>;

  constructor() {
    this.configs = {};
    this.configs.port = process.env.CLIENT_INTERNAL_PORT;
    this.configs.usersService = {
      options: {
        host: 'users', // process.env.USERS_HOST,
        port: 5000, // process.env.USERS_INTERNAL_PORT,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string) {
    return this.configs[key];
  }
}

console.log(new ConfigsService().get('usersService'));
