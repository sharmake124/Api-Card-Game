// src/app/users/users.controller.ts

import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getAll() {
    return this.service.getUsers();
  }
  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User) {
    const userId = parseInt(id, 10); // Convert string to number
    return this.service.updateUser(userId, user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);
    return;
  }
}
