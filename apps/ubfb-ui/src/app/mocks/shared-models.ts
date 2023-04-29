export interface ProductItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  imgUrl: string;
  soldOut: boolean;
}
