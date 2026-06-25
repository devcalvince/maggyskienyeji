import amaranthImg from '@/assets/products/amaranth.jpg';
import cowPeasImg from '@/assets/products/cow-peas.jpg';
import africanSpinachImg from '@/assets/products/african-spinach.jpg';
import spiderPlantImg from '@/assets/products/spider-plant.jpg';
import managuImg from '@/assets/products/managu.jpg';
import teaLeavesImg from '@/assets/products/tea_leaves.jpg';
import cabbageImg from '@/assets/products/cabbages_100g.png';
import kalesImg from '@/assets/products/kales.png';

export interface ProductSize {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  localName: string;
  sizes: ProductSize[];
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export interface CartProduct {
  id: string;
  name: string;
  localName: string;
  price: number;
  weight: string;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Amaranth",
    localName: "Terere / Chepkerta",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 400 },
    ],
    image: amaranthImg,
    category: "Dried Veggies",
    description: "Rich in protein and iron, perfect for traditional dishes",
    inStock: true,
  },
  {
    id: "2",
    name: "Kales",
    localName: "Sukuma Wiki",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 300 },
    ],
    image: kalesImg,
    category: "Dried Veggies",
    description: "Kenya's favorite leafy vegetable, dried for convenience",
    inStock: true,
  },
  {
    id: "3",
    name: "Cow Peas",
    localName: "Kunde",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 400 },
    ],
    image: cowPeasImg,
    category: "Dried Veggies",
    description: "Nutritious leaves packed with vitamins and minerals",
    inStock: true,
  },
  {
    id: "4",
    name: "African Spinach",
    localName: "Nderema",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 400 },
    ],
    image: africanSpinachImg,
    category: "Dried Veggies",
    description: "Traditional African spinach with authentic flavor",
    inStock: true,
  },
  {
    id: "6",
    name: "Spider Plant Leaves",
    localName: "Sakiat",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 400 },
    ],
    image: spiderPlantImg,
    category: "Dried Veggies",
    description: "Unique taste and high nutritional value",
    inStock: true,
  },
  {
    id: "7",
    name: "African Nightshade",
    localName: "Managu / Sochot",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 400 },
    ],
    image: managuImg,
    category: "Dried Veggies",
    description: "Traditional vegetable with medicinal properties",
    inStock: true,
  },
  {
    id: "8",
    name: "Cabbage",
    localName: "Cabbage",
    sizes: [
      { weight: "50g", price: 200 },
      { weight: "100g", price: 300 },
    ],
    image: cabbageImg,
    category: "Dried Veggies",
    description: "Dried cabbage for quick and easy cooking",
    inStock: true,
  },
  {
    id: "5",
    name: "Tea Leaves",
    localName: "Chai",
    sizes: [
      { weight: "150g", price: 100 },
    ],
    image: teaLeavesImg,
    category: "Beverages",
    description: "Premium Kenyan tea leaves for the perfect cup",
    inStock: true,
  },
];

export const categories = [
  "All",
  "Dried Veggies",
  "Beverages",
];
