import { Song } from './songs.entity';
import { Connection, connection } from './../common/constants/connection';
import { CreateSongsDTO } from './dto/create-songs-dto';
import { SongsService } from './songs.service';
import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Query, Scope } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UpdateSongsDTO } from './dto/update-songs-dto';
import { Pagination } from 'nestjs-typeorm-paginate';

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
    findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe)
        page = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
        limit = 10,
    ): Promise<Pagination<Song>> {
        limit = limit > 100 ? 100 : limit;
        return this.songsService.paginate({ page, limit });
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
