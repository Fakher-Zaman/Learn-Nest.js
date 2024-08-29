import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

// Generated through nest-cli
@Controller('/user')
export class UserController {
    // '/user/'
    @Get()
    getMessage() {
        return 'I am from user controller';
    }

    // '/user/users/'
    @Get('/users')
    getUsers() {
        return {
            name: "Fakher Zaman",
            email: "fakherzamanofficial@gmail.com",
        };
    }

    // '/user/'
    @Post()
    store(@Req() req: Request) {
        console.log(req.body);
        return req.body;
    }

    // '/user/:userId/'
    @Patch('/:userId')
    updateUser(@Req() req: Request) {
        console.log(req.body);
        return req.body;
    }

    // '/user/:userId/'
    @Get('/:userId')
    getUser(@Param() params: { userId: number }) {
        return params;
    }

    // '/user/:userId/'
    @Delete('/:userId')
    deleteUser(@Param() params: { userId: number }) {
        return params;
    }
}