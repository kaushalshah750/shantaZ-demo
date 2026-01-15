import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'ShantaZ Machinery | Industrial Food Processing Solutions' },
    { path: 'about', component: AboutComponent, title: 'About Us | ShantaZ Machinery' },
    { path: 'contact', component: ContactComponent, title: 'Contact Factory | ShantaZ Machinery' },
    { path: 'product/:id', component: ProductDetailComponent, title: 'Product Specifications | ShantaZ Machinery' },
    { path: '**', redirectTo: '' }
];
