import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[] | null> {
    return this.productService.getAllProducts();
  }
}
