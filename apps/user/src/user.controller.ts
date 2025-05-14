import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './user.create.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @MessagePattern('allUser')
  getUser() {
    return this.userService.getAll();
  }

  @MessagePattern('user')
  createUser(data: CreateUserDto) {
    return this.userService.createUsers(data);
  }

  @MessagePattern('updateUser')
  updateUser(data: CreateUserDto, id: number) {
    return this.userService.update(data, id);
  }

  @MessagePattern('deleteUser')
  deleteUser(id: number) {
    return this.userService.deleteusers(id);
  }
}
