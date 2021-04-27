export interface Product {
  id: string;
  name: string;
  price: number;
  reviewRating: number;
  imageFileName: string;
}

export interface ProductState {
  list: Product[];
  product?: Product;
}
