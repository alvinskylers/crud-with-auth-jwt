import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { type Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[] | null> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.productService.getProductById(id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct(id);
  }

  @Post()
  createProduct(@Body() createProduct: Product): Promise<Product> {
    return this.productService.createProduct(createProduct);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() updateProduct: Product): Promise<Product> {
    return this.productService.updateProduct(id, updateProduct);
  }
}
