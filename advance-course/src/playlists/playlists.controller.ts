import { CreatePlayListDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistsService } from './playlists.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('playlists')
export class PlaylistsController {
    constructor(private PlaylistService: PlaylistsService) { }
    @Post()
    create(
        @Body() playlistDto: CreatePlayListDto,
    ): Promise<Playlist> {
        return this.PlaylistService.create(playlistDto);
    }
}
