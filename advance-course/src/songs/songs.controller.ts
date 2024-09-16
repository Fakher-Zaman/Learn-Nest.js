import { SongsService } from './songs.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {} 
    @Post()
    create() {
        return this.songsService.create('Animals by John Coltrane');
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne() {
        return 'fetch song on the based of id';
    }

    @Put(':id')
    update() {
        return 'update song on the based of id';
    }

    @Delete(':id')
    delete() {
        return 'delete song on the based of id';
    }
}
