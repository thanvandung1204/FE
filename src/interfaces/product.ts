export interface IProduct {
  _id?: number| string;
  name: string;
  price: number;
  image: Array<string>;
  colorSizes:  Array<string>;
  categoryId: string;  
  quanlity : number;
  description: string;
  trang_thai: string

}