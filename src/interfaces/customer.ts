export interface ICustomer {
    _id?: string;
    name?: string;
    fullname?: string;
    ngaysinh?: Date; 
    email: string;
    password: string;
    status: "Active" | "Inactive";
    image_url: string; 
    favoriteProducts: string[]; 
    addressUser: string[];     
    confirmPassword: string;
}

export interface IUpdateCustomer {
    _id: string | number;
    name: string;
    fullname: string;
    ngaysinh: Date;
    confirmPassword: string;
}