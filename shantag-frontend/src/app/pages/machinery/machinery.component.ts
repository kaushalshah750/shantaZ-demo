import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-machinery',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './machinery.component.html'
})
export class MachineryComponent implements OnInit {
    private productService = inject(ProductService);
    products = signal<Product[]>([]);

    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: (data) => this.products.set(data),
            error: (err) => console.error('Failed to load products', err)
        });
    }
}
