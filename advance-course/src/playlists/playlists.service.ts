import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from 'src/songs/songs.entity';
import { User } from 'src/users/user.entity';
import { CreatePlayListDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';

@Injectable()
export class PlaylistsService {
    constructor(
        @InjectRepository(Playlist)
        private playListRepo: Repository<Playlist>,

        @InjectRepository(Song)
        private songRepo: Repository<Song>,

        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    async create(playListDTO: CreatePlayListDto): Promise<Playlist> {
        const playList = new Playlist();
        playList.name = playListDTO.name;
        // songs will be the array of IDs that we are getting from the DTO object
        const songs = await this.songRepo.findByIds(playListDTO.songs);
        //Set the relation for the songs with the playlist entity
        playList.songs = songs;
        // A user will be the ID of the user we are getting from the request
        //When we implemented the user authentication this id will become the logged in user id
        const user = await this.userRepo.findOneBy({ id: playListDTO.user });
        playList.user = user;
        return this.playListRepo.save(playList);
    }
}
