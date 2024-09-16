import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local db
    // local array

    private readonly songs = [];

    create(song) {
        // Save the song in the database
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // Fetch all the songs from the database
        return this.songs;
    }
}
