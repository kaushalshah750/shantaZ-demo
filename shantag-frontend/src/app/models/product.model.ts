export interface Product {
    id: number;
    name: string;
    category: string;
    model_no: string;
    image_url: string;
    description: string;
    specs: Record<string, string>;
}
