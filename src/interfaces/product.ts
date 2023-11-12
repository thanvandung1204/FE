export interface IProduct {
  id: number| string;
  name: string;
  price: number;
  image: Array<string>;
  sale: number,
  category: string;  
  quanlity : number;
  description: string;
}