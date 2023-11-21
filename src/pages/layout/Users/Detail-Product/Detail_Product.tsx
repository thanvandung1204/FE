import "./Detail_Products.css";
import { ImageList, ImageListItem, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Carousel, IconButton } from "@material-tailwind/react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcConferenceCall } from "react-icons/fc";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import Icon from "../../../../components/Icon/icon";
import Comment from "../../../../components/admin/comment/Comment";
import { Image as AntdImage, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "@/api/product";
const Detail_Product = () => {
    const { id } = useParams<{ id: string }>(); // Get the product id from the URL parameters
    const { data: product, isLoading } = useGetProductByIdQuery(String(id));
  
    
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
           
            <div className="w-screen min-h-[300px] mt-10">
                <div className="big-content w-full px-2 md:w-4/5  mx-auto">
                    {/* menu */}
                    <div className="breadcrumbs">
                        <ul className="flex items-center gap-2">
                            <Link to={"/"}>
                                <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                                    Home
                                </li>
                            </Link>
                            <li>/cate</li>
                            <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                            </li>
                            <li>/</li>
                            <li>pro</li>
                        </ul>
                    </div>
                    {/* name và rating */}
                    <div className="name-rating mt-8 md:mt-10">
                        <div className="rating flex items-center">
                            sao
                            <span className="underline underline-offset-1">(17 reviews)</span>
                        </div>
                        <div className="name-product mt-3">
                            <h1 className="title-name uppercase font-medium text-[#282828] text-2xl">
                                 {product?.product.name}
                            </h1>
                        </div>
                    </div>
                    {/* Slide và content */}


                    <div className="slider-text-content min-w-full  flex flex-col gap-5 mt-8 md:mt-10 md:flex-row justify-between  ">
                        {/* slider */}
                        <div className="slider w-full md:w-2/5 relative overflow-hidden ">
                        <img src="https://swagger.com.vn/wp-content/uploads/2022/08/lv-trainer-sneaker-black-and-white-1.jpg"></img>
                            <i className="text-3xl text-black icon-arrow-left">
                                <FiArrowLeftCircle />
                            </i>
                            <i className="text-3xl text-black transform ">
                                <FiArrowRightCircle />
                            </i>

                            {/* sale */}
                            <div className="prd-sale absolute top-2 left-1 min-w-[75px]">

                                <div className=" py-[2px] bg-pink-600 my-1">
                                    <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                                    {product?.product.sale}
                                    </span>
                                </div>


                                <div className="prd-sale py-[2px] bg-blue-300">
                                    <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                                        NEW
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* content */}
                        <div className="text-content flex-1">
                            <div className="info-price flex flex-col md:flex-row gap-5 items-center">
                                <>
                                    <h1 className="text-3xl font-normal">{product?.product.price}</h1>
                                    <div className="price-old">
                                        <h2 className="text-lg line-through">{product?.product.price}</h2>
                                        <p className="text-sm font-medium text-[#fb317d]">
                                            You Save: %
                                        </p>
                                    </div>
                                </>      
                            </div>
                            <div className="info-desc mt-5">
                                <h2 className="text-lg font-medium">Short description</h2>
                                <p className="break-words mt-3 text-sm text-[#282828]">
                                    mo tả ngắn
                                </p>
                            </div>
                            <hr className="bg-gray-300 h-1 mx-auto mt-10" />
                            {/* Status */}
                            <div className="info-item-block-status mt-5">
                                <div className="box grid grid-cols-1 md:grid-cols-2 p-10 bg-[#f7f7f8]">
                                    <div className="box1">
                                        <p>
                                            Availability: <span>ttttt</span>
                                        </p>
                                        <p>
                                            Tax Info: <span>Tax included.</span>
                                        </p>
                                        <p>
                                            Collection:<span>  ggggg
                                            </span>
                                        </p>
                                    </div>
                                    <div className="box2">
                                        <p>
                                            Sectors: <span>rrrrr</span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            {/* Options */}
                            <div className="options">
                                {/* color */}
                                                            <div className="color flex items-center gap-10">
                                <h2 className="text-lg font-medium">Color:</h2>
                                <ul className=" grid grid-cols-3 md:flex items-center gap-5">
                                    <li>
                                        <select name="color" id="color">
                                            {product?.product.colorSizes.map((colorSize) => 
                                                <option key={colorSize._id} value={colorSize.color}>{colorSize.color}</option>
                                            )}
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            {/* size */}
                            <div className="size flex items-center gap-10 mt-5">
                                <h2 className="text-lg font-medium">Size:</h2>
                                <ul className="flex items-center gap-2">
                                    <select name="size" id="size">
                                        {product?.product.colorSizes.map((colorSize) => 
                                            colorSize.sizes.map((sizeObj) => 
                                                <option key={sizeObj._id} value={sizeObj.size}>{sizeObj.size}</option>
                                            )
                                        )}
                                    </select>
                                    <li className="rounded-md cursor-pointer  py-1 ">
                                        <span className="active-bg-size hover:bg-black px-1 py-2 hover:text-white  rounded-md">
                                            Size
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            {/* quantity by size */}
                            <div className="size flex items-center gap-10 mt-5">

                                <ul className="flex items-center gap-2">

                                    <div className="quantity flex items-center gap-5">
                                        <h2 className="text-lg font-medium">Quantity:</h2>
                                        <div className="input-number flex items-center  border-2 ">
                                            <button className="btn-minus flex w-full px-2">-</button>
                                            <input
                                                type="text"
                                                className="w-12 text-center border-x-2" defaultValue={ product?.product.quantity} />
                                            <button className="btn-plus px-2">+</button>
                                        </div>
                                        <span className="text-sm"> products are available </span>
                                    </div>

                                </ul>
                            </div>
                            {/* action-button số lượng yêu thích */}
                            <div className="action-addtocart mt-5">
                                {/* số lượng */}
                                <div className="quantity flex items-center gap-5">
                                    <h2 className="text-lg font-medium">Total Quantity:</h2>
                                    <div className="input-number flex items-center gap-5">
                                        <h1>dếwte5r</h1>
                                    </div>
                                </div>
                                {/* button */}
                                <div className="button flex items-center gap-4 mt-5">
                                    <button className="btn-addtocart flex-1 bg-[#17c6aa] text-white hover:bg-black py-4 rounded-md">
                                        Add to cart
                                    </button>
                                    <button className="btn-wishlist">
                                        <span>
                                           6u56u5
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mô tả và support */}
                <div className="desc-support">
                    <div className="info-support flex flex-col gap-10 md:flex-row justify-between items-center bg-gray-100 py-2 px-1 mt-8 md:mt-20">
                        <div className="item flex items-center ">
                            <i className="text-4xl">
                                <FcConferenceCall />
                            </i>
                            <span>24/7 Support</span>
                        </div>
                        <div className="item">
                            <span>Use promocode FOXIC to get 15% discount!t</span>
                        </div>
                        <div className="item flex items-center">
                            <i className="text-4xl">
                                <TbTruckDelivery />
                            </i>
                            <span>Fast Shipping</span>
                        </div>
                    </div>
                    {/* Mô tả */}
                    <div className="info-desc mt-8 md:mt-20">
                        <h1 className="underline underline-offset-8 text-xl font-semibold my-10">
                            Description
                        </h1>
                        <div className="desc flex flex-col-reverse md:flex-row items-start gap-5">
                            <p className="mb-5 w-2/3 text-base leading-7 indent-8">
                            {product?.product.description}
                            </p>
                            <div className="list-images border-2 p-5 rounded-lg md:w-1/3 ">
                                r6ty5r6ty5r675
                            </div>
                        </div>
                    </div>
                </div>
                {/* Đánh giá */}
                <div className="rating-user">
                    <h1 className="my-5 text-xl font-medium">Đánh giá và Nhận xét </h1>
                    <div className="shadow-rating-user  min-h-[200px] w-full rounded-lg p-5 ">
                        <div className="content-rating min-h-[200px]  border-2 border-gray-300 rounded-2xl flex items-center">
                            <div className="rating-big border-r-2 p-2 text-center w-1/3 ">
                                <p>erger/5</p>
                                <div className="rating-star">
                                    <i>  </i>
                                </div>
                                <p> đánh giá và nhận xét</p>
                            </div>
                            <div className="rating-big-item w-full">


                            </div>
                        </div>
                        {/* button đánh giá */}
                        <div className="button-rating-and-commnet mt-5 w-full mx-auto flex justify-center items-center ">
                            <button className="btn-rating-and-commnet text-base bg-[#17c6aa] text-white hover:bg-black py-2 px-20 rounded-xl">
                                Đánh giá ngay
                            </button>
                        </div>
                        {/* user-rating và đánh giá */}
                        <div className="user-rating-evaluate ">
                            <div className="user-rating-evaluate-item mt-5">
                                <div className="flex items-center gap-3">
                                    <div className="user-rating-evaluate-item-img w-8 h-8">

                                    </div>
                                    <span className="font-semibold text-base">Đỗ Thành Long</span>
                                </div>

                                <div className="user-rating-evaluate-item-content ml-10">

                                    <div className="rating-star bg-blue-gray-50 p-2 rounded-lg">
                                        <div className="flex items-center h-8 ">
                                            <span className="font-semibold text-sm">Đánh giá: </span>
                                            <i className="flex items-center ">  tỷ56tyr4e</i>
                                        </div>
                                        <div className="flex items-center">
                                            <span className=" font-semibold text-sm">Nhận xét: </span>
                                            <p className="flex items-center text-xs">Sản phẩm rất là ok</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className="user-rating-evaluate ">
                            <div className="user-rating-evaluate-item mt-5">
                                <div className="flex items-center gap-3">
                                    <div className="user-rating-evaluate-item-img w-8 h-8">

                                    </div>
                                    <span className="font-semibold text-base">Đỗ Thành Long</span>
                                </div>

                                <div className="user-rating-evaluate-item-content ml-10">

                                    <div className="rating-star bg-blue-gray-50 p-2 rounded-lg">
                                        <div className="flex items-center h-8 ">
                                            <span className="font-semibold text-sm">Đánh giá: </span>
                                            <i className="flex items-center ">  </i>
                                        </div>
                                        <div className="flex items-center">
                                            <span className=" font-semibold text-sm">Nhận xét: </span>
                                            <p className="flex items-center text-xs">Sản phẩm rất là ok</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>



                </div>
                {/* Coment user */}
                <div className="comment">
                    <Comment />
                </div>
                {/* Sản phẩm cùng loại */}
                <div className="prd-cate mt-8 md:mt-10">
                    <h1 className="text-center text-3xl font-medium my-5">
                        Similar products
                    </h1>
                    {/* <Item /> */}
                </div>
            </div >
        </div >
            
     
    </>
  );
};

export default Detail_Product;
