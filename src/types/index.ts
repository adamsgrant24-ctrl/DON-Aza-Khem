export type CategoryType = 'suits' | 'shirts' | 'jewelry';

export type JewelrySubCategory = 
  | 'rings' 
  | 'watches' 
  | 'necklaces' 
  | 'bracelets' 
  | 'cufflinks' 
  | 'lapel-pin';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  subCategory?: JewelrySubCategory;
  price: number;
  formattedPrice: string;
  tagline: string;
  description: string;
  details: string[];
  composition: string;
  suitColor?: string;
  shirtColor?: string;
  necklaceAccents?: string;
  image: string;
  aspectRatio?: string;
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export type ActivePage = 'home' | 'suits' | 'shirts' | 'jewelry' | 'contact' | 'brand-bible' | 'navy-signature';
