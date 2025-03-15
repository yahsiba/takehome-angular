/**
 * Product Interface, implemented within the other Product components, 
 * outlining the various characteristics of a Product including an id, 
 * name, description, price, image, and stock for each item in the store.
 *
 */

export interface Product {
    id: number;
    name: string;         
    description?: string;  
    price: number;
    image: string;
    stock?: number;
  }
  