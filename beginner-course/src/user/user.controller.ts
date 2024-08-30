import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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
    store(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    // '/user/:userId/'
    @Patch('/:userId')
    updateUser(
        @Body() updateUserDto: UpdateUserDto, 
        @Param('userId', ParseIntPipe) userId: number
    ) {
        return this.userService.update(updateUserDto, userId);
    }

    // '/user/:userId/'
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.show(userId);
    }

    // '/user/:userId/'
    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId);
    }
}