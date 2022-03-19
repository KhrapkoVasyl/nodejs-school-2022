import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserI } from './interfaces/user.interface';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  private readonly users: UserI[] = [];

  getAllUsers(): UserI[] {
    return this.users;
  }

  getUserById(id: string): UserI {
    const user = this.users.find((el: UserI) => el.id === id);

    if (!user)
      throw new HttpException(
        'User with the specified id was not found',
        HttpStatus.NOT_FOUND,
      );

    return user;
  }

  createUser(dto: CreateUserDto) {
    const createdUser: UserI = {
      id: v4(),
      ...dto,
    };

    this.users.push(createdUser);

    return createdUser;
  }

  updateUser(id: string, dto: CreateUserDto): UserI {
    const user = this.getUserById(id);
    user.name = dto.name;
    return user;
  }

  deleteUser(id: string): void {
    const index = this.users.findIndex((el: UserI) => el.id === id);

    if (index === -1)
      throw new HttpException(
        'User with the specified id was not found',
        HttpStatus.NOT_FOUND,
      );

    this.users.splice(index, 1);
    return;
  }
}
