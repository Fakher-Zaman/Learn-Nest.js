import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/greet')
export class AppController {
    // '/greet/'
    @Get()
    getGreeting() {
        return 'Welcome to the NestJS Main Controller'
    }

    // '/greet/user/'
    @Get('/user')
    getUsers() {
        return {
            name: "Fakher Zaman",
            email: "fakherzamanofficial@gmail.com",
        };
    }

    // '/greet/'
    @Post()
    store(@Req() req: Request) {
        console.log(req.body);
        return req.body;
    }

    // '/greet/:userId/'
    @Patch('/:userId')
    updateUser(@Req() req: Request) {
        console.log(req.body);
        return req.body;
    }

    // '/greet/:userId/'
    @Get('/:userId')
    getUser(@Param() params: {userId: number}) {
        return params;
    }

    // '/greet/:userId/'
    @Delete('/:userId')
    deleteUser(@Param() params: {userId: number}) {
        return params;
    }
}
