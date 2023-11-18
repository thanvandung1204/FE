import { Rating, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../Image/ImagePriview";
import { AiFillEye } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
// import Icon from "../Icon/icon";
// import { Tooltip } from "antd";
import { IProduct } from "../../interfaces/product";
// import FormatterPrice from "../FormatterPrice/FormatterPrice";
import { useState } from "react";
type Props = {
    buttonAdd?: string;
    product?:IProduct;
    icon?: string;
    infoProduct?: boolean
}

const Item = ({ buttonAdd, product, icon, infoProduct = true }: Props) => {
    const [imageHover, setImage] = useState(product?.image[0]);
    const handleClickThumbnail = (image: string) => {
        setImage(image);
    };
    // if (!product) {
    //     return null
    // }

    return (<>
        <div className="w-full md:w-64 m-auto content shadow-2xl rounded-lg overflow-hidden">
            <div className="w-full">
                <div className="w-full relative overflow-hidden ">
                    <img
                        src="https://swagger.com.vn/wp-content/uploads/2022/08/lv-trainer-sneaker-black-and-white-1.jpg"
                        alt="Leather Pegged Pants"
                        className="w-full transition duration-700 ease-in-out object-cover  max-h-[200px]   md:max-h-[250px] min-h-[320px]  md:min-h-[280px] "
                    />
                    <div className="prd-sale absolute top-2 left-1 min-w-[60px]">
                        <div className="py-[2px] mb-1 bg-pink-600">
                            <span className=" m-1 block  rounded-full text-center text-sm font-medium text-white">
                                20% SALE
                            </span>   </div>
                        <div className="py-[2px] bg-[#33c7fd]">
                            <span className=" m-1 block  rounded-full text-center text-sm font-medium text-white">
                                New
                            </span>     </div>

                    </div>
                    <div className="prd-circle-labels absolute flex flex-col top-1 right-1 ">
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1 ">
                                <span>
                                    <AiTwotoneHeart />
                                </span>
                            </i>
                        </span>
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1   ">
                                <span>
                                    <AiFillEye />
                                </span>
                            </i>
                        </span>
                        <div className="color-palette bg-white flex flex-col justify-center items-center w-8 rounded-full shadow-md mt-2 cursor-pointer">
                            <i className="icon-palette  ">
                                <img
                                    src="https://play-lh.googleusercontent.com/fn03mcSzK10OdPq_eio_Buh7BXiN8TNOGZPHHCnjtPyynK9kJhkdlbqDd0o_vZrIIw=w240-h480-rw"
                                    className="w-full rounded-full"
                                    alt=""
                                />
                            </i>
                            <div className="list-color">
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <div>màu</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="list-options color-swatch absolute bottom-1 left-1 ">
                        <li className=" w-10 h-10 mt-1 rounded-full hover:outline-2 hover:outline-teal-400 outline outline-1 cursor-pointer overflow-hidden  ">
                            <img
                                src="https://play-lh.googleusercontent.com/fn03mcSzK10OdPq_eio_Buh7BXiN8TNOGZPHHCnjtPyynK9kJhkdlbqDd0o_vZrIIw=w240-h480-rw"
                                className="w-full h-full object-contain p-1"
                                alt="Color Name"
                            />
                        </li>
                    </ul>
                </div>
                <div className="prd-tag ">
                    <div className="prd-info">
                        <div className="prd-info-wrap bg-white">
                            <div className="prd-rating text-center pt-5 cursor-pointer">
                            </div>
                            <div className="text-center mt-1 cursor-pointer">
                                <span className="text-[#9e9e9e] font-normal text-sm">
                                    SneakerStore
                                </span>
                            </div>
                            <h2 className="prd-title text-center mt-1 cursor-pointer min-h-[80px] flex items-center justify-center">
                                <span className="text-[#282828] font-medium text-base hover:text-[#17c6aa] ">
                                    Tên sản Phẩm
                                </span>
                            </h2>
                            <div className="prd-description hidden">
                                Quisque volutpat condimentum velit. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                            </div>
                            <h2 className=" price  flex justify-center gap-5 text-center mt-1 cursor-pointer">
                                <div className="flex gap-2">
                                    <span className="text-[#666565]  text-base line-through  ">
                                        giá tiền
                                    </span>
                                    <span className="text-[#282828] font-medium text-base">
                                        giá sau sale
                                    </span>
                                </div>
                            </h2>
                            <div className="mt-1 prd-action text-center btn-add  ">
                                <form action="#">
                                    <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-sm px-4 py-2 font-semibold ">
                                        Thêm giỏ hàng
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
export default Item;