import { CreateSongsDTO } from './dto/create-songs-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, HttpException, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {} 
    @Post()
    create(@Body() createSongsDto: CreateSongsDTO) {
        return this.songsService.create(createSongsDto);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (error) {
            throw new HttpException('Bad Request', 400);
        }
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
