import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { logger, LoggerMiddleware } from './middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.GET });
    consumer
      .apply(logger)
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)'
      // )
      .forRoutes(CatsController)
  }
}
