import { BadRequestException, Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
// @UseFilters(new HttpExceptionFilter())
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    // @UseFilters(new HttpExceptionFilter())
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
    }

    @Get()
    async findAll() {
        throw new BadRequestException('Something bad happened', {cause: new Error(), description: 'Some error description'});
    }
}
