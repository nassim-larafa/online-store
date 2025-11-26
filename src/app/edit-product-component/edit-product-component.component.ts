import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})

export class EditProductComponent {
  product: Product = {
    id: 0,
    code: '',
    name: '',
    price: 0,
    quantity: 0,
    image: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newProduct = new Product(
        0, // L'ID sera généré par le service
        this.product.code,
        this.product.name,
        this.product.price,
        this.product.quantity,
        this.product.image || ''
      );
      
      this.productService.addProduct(newProduct);
      this.router.navigate(['/products']);
    }
  }

  // onCancel(): void {
  //   this.router.navigate(['/products']);
  // }
}