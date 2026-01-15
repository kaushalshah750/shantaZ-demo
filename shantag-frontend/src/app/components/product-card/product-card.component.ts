import { Component, computed, input } from '@angular/core';
import { CommonModule, KeyValuePipe, NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product.model';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, KeyValuePipe, NgOptimizedImage, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product = input.required<Product>();

  whatsappUrl = computed(() => {
    const p = this.product();
    const text = `Hi, I am interested in ${p.name} (Model: ${p.model_no}).`;
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/919974442525?text=${encodedText}`;
  });
}