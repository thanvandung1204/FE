export interface Icomment {
    _id?: string;
    content: string;
    rating: number;
    userId:string | number | undefined;
    productId: string | number | undefined;
  }