import { Song } from './songs.entity';
import { Connection, connection } from './../common/constants/connection';
import { CreateSongsDTO } from './dto/create-songs-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Scope } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UpdateSongsDTO } from './dto/update-songs-dto';

@Controller({
    path: 'songs',
    scope: Scope.REQUEST,
})
export class SongsController {
    constructor(
        private songsService: SongsService,
        @Inject('CONNECTION')
        private connection: Connection
    ) {
        console.log(`THIS IS CONNECTION STRING: ${this.connection.CONNECTION_STRING}`);
    }
    @Post()
    create(@Body() createSongsDto: CreateSongsDTO): Promise<Song> {
        return this.songsService.create(createSongsDto);
    }

    @Get()
    findAll(): Promise<Song[]> {
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
        id: number,
    ): Promise<Song> {
        return this.songsService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSongsDto: UpdateSongsDTO,
    ) {
        return this.songsService.update(id, updateSongsDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.songsService.remove(id);
    }
}
