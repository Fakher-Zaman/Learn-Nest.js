import { Injectable, Scope } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './songs.entity';
import { CreateSongsDTO } from './dto/create-songs-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongsDTO } from './dto/update-songs-dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable({
    scope: Scope.TRANSIENT,
})
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private songsRepository: Repository<Song>
    ) { }

    create(songDTO: CreateSongsDTO): Promise<Song> {
        const song = new Song();
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.releasedDate = songDTO.releasedDate;
        song.duration = songDTO.duration;
        song.lyrics = songDTO.lyrics;

        return this.songsRepository.save(song);
    }

    findAll(): Promise<Song[]>  {
        return this.songsRepository.find();
    }

    findOne(id: number): Promise<Song> {
        return this.songsRepository.findOneBy({ id });
    }

    remove(id: number): Promise<DeleteResult> {
        return this.songsRepository.delete(id);
    }

    update(id: number, recordToUpdate: UpdateSongsDTO): Promise<UpdateResult> {
        return this.songsRepository.update(id, recordToUpdate);
    }

    paginate(options: IPaginationOptions): Promise<Pagination<Song>> {
        const queryBuilder = this.songsRepository.createQueryBuilder('c');
        queryBuilder.orderBy('c.releasedDate', 'DESC');
        return paginate<Song>(queryBuilder, options);
    }
}
