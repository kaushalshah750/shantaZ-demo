import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-machinery',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './machinery.component.html'
})
export class MachineryComponent {
    products = signal<Product[]>([
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
    ]);
}
