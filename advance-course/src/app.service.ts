import { DevConfigService } from './common/providers/DevConfigService';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) { }
  getHello(): string {
    return `Hello I am learning Nest.js Concepts ${this.devConfigService.getDBHOST()} ${this.config.port}`;
  }
}
