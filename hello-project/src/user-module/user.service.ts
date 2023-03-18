import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = [];

  // getAllUserdetails
  getUsers(): User[] {
    return this.users;
  }

  // getOneUser
  getOneUser(email: string): User {
    const user = this.users.find((user: User) => user.email === email);
    return user;
  }

  // addUsers
  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  // delete Users
  deleteUser(email: string): User[] {
    const filteredUser: User[] = this.users.filter(
      (user: User) => user.email !== email,
    );
    this.users = filteredUser;
    return filteredUser;
  }
}
