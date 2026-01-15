export interface Product {
    id: number;
    name: string;
    category: string;
    modelNo: string;
    image: string;
    description: string;
    // Dynamic specs to handle different machine types
    specs: { label: string; value: string }[]; 
  }
  
  export const PRODUCTS: Product[] = [
    {
      id: 1,
      name: "Automatic Khakra Maker (Hydraulic)",
      category: "Production Line",
      modelNo: "SG-KM-2000",
      image: "assets/images/khakra-machine-placeholder.jpg", 
      description: "High-volume automatic khakra production with precision thickness control and uniform roasting.",
      specs: [
        { label: "Capacity", value: "1000 pcs/hr" },
        { label: "Power", value: "3 Phase / 5 HP" },
        { label: "Dimensions", value: "12 x 4 x 5 ft" },
        { label: "Weight", value: "850 kg" }
      ]
    },
    {
      id: 2,
      name: "Industrial Dough Kneader",
      category: "Pre-Processing",
      modelNo: "SG-DK-50",
      image: "assets/images/kneader-placeholder.jpg",
      description: "Heavy-duty stainless steel arm kneader designed for stiff doughs and continuous operation.",
      specs: [
        { label: "Bowl Capacity", value: "50 kg" },
        { label: "Motor", value: "2 HP High Torque" },
        { label: "Material", value: "SS 304 Grade" },
        { label: "Mixing Speed", value: "45 RPM" }
      ]
    },
    {
      id: 3,
      name: "Rotary Roaster Machine",
      category: "Finishing",
      modelNo: "SG-RR-300",
      image: "assets/images/roaster-placeholder.jpg",
      description: "Uniform heat distribution system for puffing, roasting, and drying food products.",
      specs: [
        { label: "Batch Size", value: "30 kg/batch" },
        { label: "Fuel", value: "LPG / Natural Gas" },
        { label: "Temp Range", value: "0 - 300°C" },
        { label: "Drive", value: "Gearbox Driven" }
      ]
    }
  ];