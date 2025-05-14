import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from 'apps/product/src/product.create.dto';
import { CreateUserDto } from 'apps/user/src/user.create.dto';

@Injectable()
export class AppService {
  @Inject('user.name') private user: ClientProxy;
  @Inject('product.name') private product: ClientProxy;
  getHello(): string {
    return 'Hello World!';
  }
  allusers() {
    return this.user.send('allUser', {});
  }
  createusers(data: CreateUserDto) {
    return this.user.send('user', data);
  }
  update(data: CreateUserDto, id: number) {
    return this.user.send('updateUser', { data, id });
  }
  deleteuser(id: number) {
    return this.user.send('deleteUser', id);
  }

  allProducts() {
    return this.product.send('allProduct', {});
  }
  createProduct(data: CreateProductDto) {
    return this.product.send('product', data);
  }
  updateProduct(data: CreateProductDto, id: number) {
    return this.product.send('updateProduct', { data, id });
  }
  deleteProduct(id: number) {
    return this.product.send('deleteProduct', id);
  }
}
