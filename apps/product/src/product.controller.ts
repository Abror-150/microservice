import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from './product.create.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }

  @MessagePattern('allProduct')
  getUser() {
    return this.productService.getAll();
  }

  @MessagePattern('product')
  createUser(data: CreateProductDto) {
    return this.productService.createproducts(data);
  }

  @MessagePattern('updateProduct')
  updateProduct(data: CreateProductDto, id: number) {
    return this.productService.update(data, id);
  }

  @MessagePattern('deleteProduct')
  deleteProduct(id: number) {
    return this.productService.deleteproducts(id);
  }
}
