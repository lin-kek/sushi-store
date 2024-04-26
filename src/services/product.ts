import { products } from "@/data/products";
import { Product } from "@/types/product";

export async function getAllProducts(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    // Simulating API request time with setTimeout to showcase skeleton loading in interface.
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}
