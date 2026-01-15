import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-slate-50 py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-4xl font-extrabold text-slate-900 mb-8 uppercase tracking-tighter">About Shanta<span class="text-orange-600">Z</span></h1>
        
        <div class="bg-white p-8 rounded-sm shadow-sm border border-slate-200 prose prose-slate max-w-none">
          <p class="text-lg leading-relaxed text-slate-700 mb-6">
            Established in 1998, <strong>ShantaZ Machinery</strong> has been at the forefront of automated food processing innovation in Gujarat. 
            We specialize in designing robust, high-capacity machinery for the traditional Indian food industry, specifically transforming labor-intensive processes like Khakra making and roasting into streamlined industrial operations.
          </p>
          
          <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h3>
          <p class="text-slate-700 mb-6">
            To empower food manufacturers with machinery that delivers consistent quality, minimizes wastage, and maximizes output. We believe in "Precision Engineering for Mass Production."
          </p>

          <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us?</h3>
          <ul class="list-disc pl-5 space-y-2 text-slate-700">
             <li><strong>In-House Manufacturing:</strong> Every machine is built in our Anand facility.</li>
             <li><strong>Customization:</strong> We tailor specs to your production needs.</li>
             <li><strong>After-Sales Support:</strong> Dedicated team for installation and maintenance.</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent { }
