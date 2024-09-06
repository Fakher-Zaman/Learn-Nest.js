import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Query, Redirect, Res } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    // Wildcards
    @Get('ab*cd')
    @HttpCode(202)
    findAll2(): string {
        return 'This action returns all ab*cd cats';
    }

    // Query like ?version=5
    @Get('docs')
    // @Redirect('https://docs.nesstjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return {
                docs: 'https://docs.nestjs.com/v5/'
            };
        } else {
            return {
                docs: 'https://docs.nestjs.com/v0/'
            };
        }
    }

    // Path parameters
    @Get(':id')
    findOne(@Param('id') id: string): string {
        // console.log(id);
        return `This action returns a #${id} cat`;
    }

    // Library Specific Approach
    @Post('/lib')
    findAllLib(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }
}
