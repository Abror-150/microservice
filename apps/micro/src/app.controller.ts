import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from 'apps/user/src/user.create.dto';
import { CreateProductDto } from 'apps/product/src/product.create.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  allBooks() {
    return this.appService.allusers();
  }

  @Post('createUser')
  createBooks(@Body() data: CreateUserDto) {
    return this.appService.createusers(data);
  }

  @Patch('updateUser/:id')
  updateBook(@Param('id') id: number, @Body() data: CreateUserDto) {
    return this.appService.update(data, +id);
  }
  @Delete('deleteUser/:id')
  deleteBook(@Param('id') id: number) {
    return this.appService.deleteuser(+id);
  }

  @Get('products')
  allProduct() {
    return this.appService.allProducts();
  }

  @Post('createProduct')
  create(@Body() data: CreateProductDto) {
    return this.appService.createProduct(data);
  }

  @Patch('updateProduct/:id')
  update(@Param('id') id: number, @Body() data: CreateProductDto) {
    return this.appService.updateProduct(data, +id);
  }
  @Delete('deleteProduct/:id')
  delete(@Param('id') id: number) {
    return this.appService.deleteProduct(+id);
  }
}
