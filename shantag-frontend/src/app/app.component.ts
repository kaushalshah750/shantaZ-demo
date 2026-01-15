import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ShieldCheck, Truck, Clock, Award } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Icons for persistent layout components if needed
  readonly ShieldCheck = ShieldCheck;
  readonly Truck = Truck;
  readonly Clock = Clock;
  readonly Award = Award;
}
