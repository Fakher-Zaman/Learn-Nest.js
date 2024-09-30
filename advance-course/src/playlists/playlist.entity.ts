import { Song } from "src/songs/songs.entity";
import { User } from "src/users/user.entity";
import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("playlists")
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // Each playlist have multiple songs
    @OneToMany(() => Song, (song) => song.playList)
    songs: Song[];

    // Many playlist can belong to a single unique user
    @ManyToOne(() => User, (user) => user.playLists)
    user: User;
}