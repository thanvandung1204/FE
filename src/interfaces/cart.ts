export interface ICartItem {
  productId: string | number;
  size: string[];
  color: string[];
  image: string[];
  quantity: number;
  _id: string | number;
}
export interface ICart {
  _id: string | number;
  userId: string;
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
  totalpriceSale: number;
}
