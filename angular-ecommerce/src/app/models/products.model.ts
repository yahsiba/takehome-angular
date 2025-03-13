export interface Product {
    id: number;
    name: string;         // Replacing "title" with "name"
    description?: string;  // New field for description
    price: number;
    image: string;
    stock?: number;
  }
  