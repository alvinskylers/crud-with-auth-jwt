import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return await this.prisma.product.create({
      data,
    });
  }

  async getProductById(id: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({
      where: { id: id },
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.prisma.product.delete({
      where: { id },
    });
  }

  async updateProduct(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
    return await this.prisma.product.update({
      where: { id: id },
      data,
    });
  }
}
