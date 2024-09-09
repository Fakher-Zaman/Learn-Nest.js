import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatsModule],
})
export class AppModule { }
