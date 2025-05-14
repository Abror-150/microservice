import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './product.create.dto';

type Product = {
  id: number;
  name: string;
};

let products: Product[] = [];
let idCounter = 1;

@Injectable()
export class ProductService {
  getHello(): string {
    return 'Hello World!';
  }

  getAll() {
    return products;
  }
  createproducts(data: CreateProductDto) {
    const newProduct = { id: idCounter++, name: data.name };
    products.push(newProduct);
    return newProduct;
  }
  update(data: CreateProductDto, id: number) {
    let one = products.findIndex((product) => product.id == id);
    if (one !== -1) {
      products[one] = { ...products[one], ...data };
      console.log(products[one]);
      return products[one];
    } else {
      return null;
    }
  }

  deleteproducts(id: number) {
    let one = products.findIndex((user) => user.id == id);
    if (one) {
      const deleted = products.splice(one, 1);
      return deleted[0];
    } else {
      return null;
    }
  }
}
