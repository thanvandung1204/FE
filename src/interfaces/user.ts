import { IRole } from "./role";
export interface IUser {
    _id: string | number;
    name: string;
    fullname: string;
    ngaysinh: Date; 
    email: string;
    password: string;
    role: IRole;
    status: "Active" | "Inactive";
    image_url: string; 
    favoriteProducts: string[]; 
    addressUser: string[];     
}

export interface IUpdateUser {
    _id: string | number;
    name: string;
    fullname: string;
    ngaysinh: Date;
    confirmPassword: string;
}