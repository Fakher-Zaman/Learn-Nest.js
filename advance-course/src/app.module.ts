import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/DevConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Song } from './songs/songs.entity';
import { Artist } from './artists/artist.entity';
import { User } from './users/user.entity';
import { Playlist } from './playlists/playlist.entity';
import { PlayListModule } from './playlists/playlists.module';

const devConfig = { port: 3000 }
// const proConfig = { port: 4000 }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'spotify-clone',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Passw0rd',
      type: 'postgres',
      entities: [Song, Artist, User, Playlist],
      synchronize: true,
    }),
    SongsModule,
    PlayListModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DevConfigService,
      useClass: DevConfigService
    },
    {
      provide: 'CONFIG',
      useFactory: () => {
        return process.env.NODE_ENV === 'development' || devConfig
      },
    },
  ],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {
    console.log('Database Name: ', dataSource.driver.database);
  }
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); // option # 1
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({
    //     path: 'songs',
    //     method: RequestMethod.POST
    //   }); // option # 2
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); // Option # 3
  }
}
