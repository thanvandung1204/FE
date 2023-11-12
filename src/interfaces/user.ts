import { IRole } from "./role";
export interface IUser {
    _id: string | number;
    name: string;
    fullname: string;
    ngaysinh: Date; 
    email: string;
    password: string;
    role: IRole;
    trang_thai: "Active" | "Inactive";
    image_url: string; 
    favoriteProducts: string[]; 
    addressUser: string[];     
}
