import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <div class="bg-slate-50 min-h-screen py-12" *ngIf="product() as p">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Breadcrumb / Back -->
        <a routerLink="/machinery" class="inline-flex items-center text-slate-500 hover:text-orange-600 font-bold uppercase tracking-wider mb-8 transition-colors">
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
  product = signal<Product | null>(null);

  readonly ChevronLeft = ChevronLeft;

  // Static product data
  private products: Product[] = [
    {
      id: 1,
      name: "Fully Automatic Khakra Maker",
      category: "Food Processing",
      model_no: "SM-KM-100",
      image_url: "images/khakra-real.png",
      description: "High-speed automatic khakra making machine with uniform pressing and roasting technology. Designed for continuous industrial production.",
      specs: {
        "Capacity": "1000 pcs/hr",
        "Power": "5 HP (3 Phase)",
        "Material": "SS 304 Food Grade",
        "Weight": "850 kg"
      }
    },
    {
      id: 2,
      name: "Heavy Duty Dough Kneader",
      category: "Preparation",
      model_no: "SM-DK-50",
      image_url: "images/kneader-real.png",
      description: "Industrial spiral dough kneader ensuring perfect gluten development. Ideal for stiff doughs used in Khakra and Chapati production.",
      specs: {
        "Bowl Capacity": "50 kg",
        "Motor": "3 HP Crompton",
        "Mixing Speed": "40/80 RPM",
        "Dimensions": "4x3x4 ft"
      }
    },
    {
      id: 3,
      name: "Rotary Roasting Machine",
      category: "Roasting",
      model_no: "SM-R-200",
      image_url: "images/roaster-real.png",
      description: "Continuous rotary roaster for peanuts, gram, and other grains. Features uniform heat distribution and variable speed control.",
      specs: {
        "Throughput": "200 kg/hr",
        "Heating": "LPG / Electric",
        "Drum Material": "SS 316",
        "Warranty": "2 Years"
      }
    }
  ];

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const foundProduct = this.products.find(p => p.id === id);
      if (foundProduct) {
        this.product.set(foundProduct);
      }
    }
  }

  whatsappUrl(product: Product): string {
    const message = `Hi, I am interested in ${product.name} (Model: ${product.model_no}). Please send me a quote.`;
    return `https://wa.me/919974442525?text=${encodeURIComponent(message)}`;
  }
}
