import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserI } from './interfaces/user.interface';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  private readonly users: UserI[] = [];

  getAllUsers(): UserI[] {
    return this.users;
  }

  createUser(dto: CreateUserDto) {
    const createdUser: UserI = {
      id: v4(),
      ...dto,
    };

    this.users.push(createdUser);

    return createdUser;
  }
}
