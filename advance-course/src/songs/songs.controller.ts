import { Connection, connection } from './../common/constants/connection';
import { CreateSongsDTO } from './dto/create-songs-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Scope } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    constructor(
        private songsService: SongsService,
        @Inject('CONNECTION')
        private connection: Connection
    ) {
        console.log(`THIS IS CONNECTION STRING: ${this.connection.CONNECTION_STRING}`);
    }
    @Post()
    create(@Body() createSongsDto: CreateSongsDTO) {
        return this.songsService.create(createSongsDto);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (error) {
            throw new HttpException(
                'Internal Server Error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: error,
                }
            );
        }
    }

    @Get(':id')
    findOne(
        // @Param('id', ParseIntPipe)  // option # 1
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            })
        )
        id: Number,
    ) {
        return `fetch song on the based of id ${typeof id}`;
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
