import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  readUserById(@Param('id') id: string) {
    const user = this.usersService.getUserById(id);
    return { user };
  }

  @Post()
  createUser(@Body() createDto: CreateUserDto) {
    const user = this.usersService.createUser(createDto);
    return { user };
  }

  @Patch(':id')
  updateUserById(@Param('id') id: string, @Body() updateDto) {
    const user = this.usersService.updateUser(id, updateDto);
    return { user };
  }

  @Delete(':id')
  deletUserById(@Param('id') id: string): void {
    return this.usersService.deleteUser(id);
  }
}
