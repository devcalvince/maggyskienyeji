import amaranthImg from '@/assets/products/amaranth.jpg';
import cowPeasImg from '@/assets/products/cow-peas.jpg';
import africanSpinachImg from '@/assets/products/african-spinach.jpg';
import spiderPlantImg from '@/assets/products/spider-plant.jpg';
import managuImg from '@/assets/products/managu.jpg';

export interface Product {
  id: string;
  name: string;
  localName: string;
  price: number;
  originalPrice?: number;
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
    localName: "Terere/Chepkerta",
    price: 350,
    originalPrice: 390,
    weight: "100g",
    image: amaranthImg,
    category: "Leafy Greens",
    description: "Rich in protein and iron, perfect for traditional dishes",
    inStock: true,
  },
  {
    id: "2",
    name: "Kales",
    localName: "Sukuma Wiki",
    price: 270,
    weight: "100g",
    image: "https://maggyskienyeji.com/images/Kales.jpeg",
    category: "Leafy Greens",
    description: "Kenya's favorite leafy vegetable, dried for convenience",
    inStock: true,
  },
  {
    id: "3",
    name: "Cow Peas",
    localName: "Kunde",
    price: 350,
    weight: "100g",
    image: cowPeasImg,
    category: "Leafy Greens",
    description: "Nutritious leaves packed with vitamins and minerals",
    inStock: true,
  },
  {
    id: "4",
    name: "African Spinach",
    localName: "Nderema",
    price: 350,
    weight: "100g",
    image: africanSpinachImg,
    category: "Leafy Greens",
    description: "Traditional African spinach with authentic flavor",
    inStock: true,
  },
  {
    id: "5",
    name: "Tea Leaves",
    localName: "Chai",
    price: 100,
    originalPrice: 120,
    weight: "150g",
    image: "https://maggyskienyeji.com/images/Chai_1.jpeg",
    category: "Beverages",
    description: "Premium Kenyan tea leaves for the perfect cup",
    inStock: true,
  },
  {
    id: "6",
    name: "Spider Plant Leaves",
    localName: "Sakiat",
    price: 350,
    weight: "100g",
    image: spiderPlantImg,
    category: "Leafy Greens",
    description: "Unique taste and high nutritional value",
    inStock: true,
  },
  {
    id: "7",
    name: "African Nightshade",
    localName: "Managu/Sochot",
    price: 350,
    weight: "100g",
    image: managuImg,
    category: "Leafy Greens",
    description: "Traditional vegetable with medicinal properties",
    inStock: true,
  },
  {
    id: "8",
    name: "Cabbage",
    localName: "Cabbage",
    price: 270,
    weight: "50g",
    image: "https://maggyskienyeji.com/images/Cabbage.jpeg",
    category: "Vegetables",
    description: "Dried cabbage for quick and easy cooking",
    inStock: true,
  },
];

export const categories = ["All", "Leafy Greens", "Vegetables", "Beverages"];
