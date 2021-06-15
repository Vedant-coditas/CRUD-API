import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { User } from '../entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<User> {
        return this.userService.findOne(id);
    }

    @Get('select/:id')
    selectById(@Param('id') id): Promise<User> {
        return this.selectById(id);
    }

    @Post()
    create(@Body() user: User) {
        return this.userService.updateUser(user);
    }

    @Put()
    update(@Body() user:User) {
        return this.userService.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }


}
