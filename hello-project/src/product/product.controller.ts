import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('add')
  addProduct() {
    return this.productService.addProduct();
  }

  @Put(':id')
  editProduct() {
    return this.productService.editProduct();
  }

  @Delete(':id')
  deleteProduct() {
    return this.productService.deleteProduct();
  }

  @Get('all')
  getAllProducts() {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  getOneProduct() {
    return this.productService.getOneProduct();
  }

  @Get('category/:id')
  getByCategory() {
    return this.productService.getByCategory();
  }
}
