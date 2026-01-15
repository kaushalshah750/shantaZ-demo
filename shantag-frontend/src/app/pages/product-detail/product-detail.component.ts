import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LucideAngularModule, ChevronLeft, Calendar, FileText } from 'lucide-angular';
import { KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule],
    template: `
    <div class="bg-slate-50 min-h-screen py-12" *ngIf="product() as p">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Breadcrumb / Back -->
        <a routerLink="/" class="inline-flex items-center text-slate-500 hover:text-orange-600 font-bold uppercase tracking-wider mb-8 transition-colors">
          <lucide-icon [img]="ChevronLeft" class="mr-1 h-5 w-5"></lucide-icon> Back to Catalog
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-sm shadow-sm border border-slate-200">
          <!-- Image Section -->
          <div class="relative group overflow-hidden bg-slate-100 rounded-sm border border-slate-100">
             <img [src]="p.image_url" [alt]="p.name" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
          </div>

          <!-- Content Section -->
          <div>
            <div class="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-4">
              {{ p.category }}
            </div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">{{ p.name }}</h1>
            <p class="text-slate-400 font-mono text-sm mb-6">Model: {{ p.model_no }}</p>

            <p class="text-lg text-slate-700 leading-relaxed mb-8 border-l-4 border-orange-600 pl-4 bg-orange-50/50 py-2">
              {{ p.description }}
            </p>

            <!-- Specs -->
            <h3 class="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Technical Specifications</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div *ngFor="let spec of p.specs | keyvalue" class="flex justify-between border-b border-slate-100 pb-1">
                <span class="text-slate-500 font-mono text-sm uppercase">{{ spec.key }}</span>
                <span class="text-slate-900 font-bold font-mono text-sm">{{ spec.value }}</span>
              </div>
            </div>

            <!-- CTA -->
            <a [href]="whatsappUrl(p)" target="_blank" class="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-sm uppercase tracking-widest transition-colors shadow-lg hover:shadow-xl">
              Enquire on WhatsApp
            </a>
            <p class="text-xs text-center text-slate-400 mt-3">Instant connection with our sales engineers.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private productService = inject(ProductService);
    product = signal<Product | null>(null);

    readonly ChevronLeft = ChevronLeft;

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            this.productService.getProduct(id).subscribe({
                next: (data) => this.product.set(data),
                error: (err) => console.error('Error loading product', err)
            });
        }
    }

    whatsappUrl(product: Product): string {
        const message = `Hi, I am interested in ${product.name} (Model: ${product.model_no}). Please send me a quote.`;
        return `https://wa.me/919974442525?text=${encodeURIComponent(message)}`;
    }
}
