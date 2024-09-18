import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { title } from 'process';
import { connection } from 'src/common/constants/connection';
import { Song } from './songs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const mockSongsService = {
  findAll() {
    return [{ id: 1, title: 'Lasting Lover', artists: ['Sade', 'Sia'], releasedDate: new Date(), duration: new Date(), lyrics: 'test' }];
  },
};
@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    }
  ],
})
export class SongsModule { }
