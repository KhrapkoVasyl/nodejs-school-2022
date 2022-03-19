import { Injectable } from '@nestjs/common';
import { UserI } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: UserI[] = [];

  getAllUsers(): UserI[] {
    return this.users;
  }
}
