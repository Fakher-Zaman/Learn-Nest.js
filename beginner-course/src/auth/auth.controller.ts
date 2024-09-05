import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req: any) {
        return req.user;
    }
}
