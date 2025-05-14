import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.create.dto';

type User = {
  id: number;
  name: string;
};

let users: User[] = [];
let idCounter = 1;

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }
  getAll() {
    return users;
  }
  createUsers(data: CreateUserDto) {
    const newUser = { id: idCounter++, name: data.name };
    users.push(newUser);
    return newUser;
  }
  update(data: CreateUserDto, id: number) {
    let one = users.findIndex((user) => user.id == id);
    if (one !== -1) {
      users[one] = { ...users[one], ...data };
      console.log(users[one]);
      return users[one];
    } else {
      return null;
    }
  }

  deleteusers(id: number) {
    let one = users.findIndex((user) => user.id == id);
    if (one) {
      const deleted = users.splice(one, 1);
      return deleted[0];
    } else {
      return null;
    }
  }
}
