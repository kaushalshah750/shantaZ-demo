import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-slate-50 py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-4xl font-extrabold text-slate-900 mb-8 uppercase tracking-tighter">Contact <span class="text-orange-600">Us</span></h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div class="bg-white p-8 rounded-sm shadow-sm border border-slate-200">
            <h3 class="text-xl font-bold text-slate-900 mb-6 uppercase">Factory Address</h3>
            <address class="not-italic text-slate-600 space-y-4">
              <p>
                <strong>ShantaZ Machinery</strong><br>
                Plot No. 124, GIDC Estate,<br>
                Vitthal Udyognagar, Anand,<br>
                Gujarat - 388121
              </p>
              <div class="border-t border-slate-100 my-4 pt-4">
                <p class="mb-2"><strong>Sales:</strong> +91 99744 42525</p>
                <p><strong>Support:</strong> +91 99744 42526</p>
                <p class="mt-2"><strong>Email:</strong> info&#64;shantag.com</p>
              </div>
            </address>
          </div>

          <!-- Simple Form Placeholder -->
          <div class="bg-white p-8 rounded-sm shadow-sm border border-slate-200">
            <h3 class="text-xl font-bold text-slate-900 mb-6 uppercase">Send Enquiry</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Name</label>
                <input type="text" class="w-full border border-slate-300 p-2 rounded-sm focus:border-orange-600 outline-none transition-colors" placeholder="Your Name">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                <input type="tel" class="w-full border border-slate-300 p-2 rounded-sm focus:border-orange-600 outline-none transition-colors" placeholder="+91">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea rows="3" class="w-full border border-slate-300 p-2 rounded-sm focus:border-orange-600 outline-none transition-colors" placeholder="I am interested in..."></textarea>
              </div>
              <button class="w-full bg-orange-600 text-white font-bold py-3 uppercase tracking-wider hover:bg-orange-700 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent { }
