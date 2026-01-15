import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LucideAngularModule, ShieldCheck, Truck, Clock, Award } from 'lucide-angular';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, ProductCardComponent, LucideAngularModule],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private productService = inject(ProductService);
    products = signal<Product[]>([]);

    readonly ShieldCheck = ShieldCheck;
    readonly Truck = Truck;
    readonly Clock = Clock;
    readonly Award = Award;

    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: (data) => this.products.set(data),
            error: (err) => console.error('Failed to load products', err)
        });
    }
}
