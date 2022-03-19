import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  listUsers() {
    const users = this.usersService.getAllUsers();
    return { users };
  }

  @Post()
  createUser(@Body() createDto: CreateUserDto) {
    const user = this.usersService.createUser(createDto);
    return { user };
  }
}
