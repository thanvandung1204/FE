export interface IProduct {
  _id?: number| string;
  name: string;
  price: number;
  image: Array<string>;
  sale: number,
  category: string;  
  quanlity : number;
  description: string;
  trang_thai: string

}