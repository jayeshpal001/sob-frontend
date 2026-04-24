// src/data/dummyProducts.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string; // e.g., "New Arrival", "Bestseller"
}

export const dummyProducts: Product[] = [
  {
    id: "sob-01",
    name: "SOB Noir",
    description: "A deep, mysterious blend of oud and charcoal.",
    price: 180,
    image: "/sob-perfume-bottle.webp", // Replace with actual images later
    tag: "Bestseller",
  },
  {
    id: "sob-02",
    name: "SOB Blanc",
    description: "Pure, minimalist white floral essence.",
    price: 150,
    image: "/sob-perfume-bottle.webp",
  },
  {
    id: "sob-03",
    name: "SOB Velvet",
    description: "Warm vanilla layered with subtle spice.",
    price: 210,
    image: "/sob-perfume-bottle.webp",
    tag: "New Arrival",
  },
  {
    id: "sob-04",
    name: "SOB Aqua",
    description: "Crisp oceanic notes with a hint of citrus.",
    price: 130,
    image: "/sob-perfume-bottle.webp",
  }
];