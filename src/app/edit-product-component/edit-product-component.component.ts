// edit-product.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct = new Product(
        0, // L'ID sera généré par le service
        this.productForm.value.code,
        this.productForm.value.name,
        this.productForm.value.price,
        this.productForm.value.quantity,
        this.productForm.value.image || ''
      );
      
      this.productService.addProduct(newProduct);
      this.router.navigate(['/products']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}