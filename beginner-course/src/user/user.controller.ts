import { UserService } from './user.service';
import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

// Generated through nest-cli
@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {
        this.userService = userService;
    }

    // '/user/'
    @Get()
    getMessage() {
        return 'I am from user controller';
    }

    // '/user/users/'
    @Get('/users')
    getUsers() {
        return this.userService.get();
    }

    // '/user/'
    @Post()
    store(@Req() req: Request) {
        return this.userService.create(req);
    }

    // '/user/:userId/'
    @Patch('/:userId')
    updateUser(@Req() req: Request, @Param() param: { userId: number }) {
        return this.userService.update(req, param);
    }

    // '/user/:userId/'
    @Get('/:userId')
    getUser(@Param() param: { userId: number }) {
        return this.userService.show(param);
    }

    // '/user/:userId/'
    @Delete('/:userId')
    deleteUser(@Param() param: { userId: number }) {
        return this.userService.delete(param);
    }
}