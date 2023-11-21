import React, { useState } from 'react'
import { Input, InputNumber } from 'antd';
import { BsFillTrash3Fill } from 'react-icons/bs';

type Props = object

const Orderr = (props: Props) => {
    const [isIconHovered, setIsIconHovered] = useState(false);
    return (
        <div className='mx-5'>
            <h3 className="text-x text-[#222] text-center font-bold tracking-wider my-5">Thông Tin đặt Hàng</h3>
            <div className='sm:flex sm:flex-row'>
                <div className='border sm:w-6/12 p-10 mr-5 w-full mb-5'>
                    <h4 className="text-xl text-[#222]  font-bold tracking-wider my-2">Thông tin người đặt</h4>
                    <div className='flex'>
                        <div className="mt-2 mr-3 w-2/4">
                            <label className='mb-3' htmlFor="">Họ:</label>
                            <Input placeholder="Họ....." className='p-3' />
                        </div>
                        <div className="mt-2 w-2/4">
                            <label className='mb-3' htmlFor="">Tên:</label>
                            <Input placeholder="Tên....." className=' p-3' />
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <label className='mb-3' htmlFor="">Số Điện Thoại</label>
                        <Input placeholder="Số điện thoại.." className=' p-3 w-full' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="">Địa Chỉ</label>
                        <fieldset className="grid grid-cols-2 gap-4">
                            <legend className="sr-only">Địa chỉ</legend>

                            <div>
                                <input
                                    type="radio"
                                    name="AddressOption"
                                    value="address1"
                                    id="address1"
                                    className="peer hidden"
                                    checked
                                />

                                <label
                                    htmlFor="address1"
                                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                >
                                    <p className="text-gray-700 text-base border-b">Address 1</p>
                                    <div>
                                        <p className='mt-1 text-gray-900'>Thomas Nolan Kaszas</p>
                                        <p className='mt-1 text-gray-900'>5322 Otter Ln Middleberge</p>
                                        <p className='mt-1 text-gray-900'>FL 32068 Palm Bay FL 32907</p>
                                    </div>
                                </label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="AddressOption"
                                    value="address2"
                                    id="address2"
                                    className="peer hidden"
                                />

                                <label
                                    htmlFor="address2"
                                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                >
                                    <p className="text-gray-700 text-base border-b">Address 2</p>

                                    <div>
                                        <p className='mt-1 text-gray-900'>Thomas Nolan Kaszas</p>
                                        <p className='mt-1 text-gray-900'>5322 Otter Ln Middleberge</p>
                                        <p className='mt-1 text-gray-900'>FL 32068 Palm Bay FL 32907</p>
                                    </div>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className='border sm:w-6/12 p-10 w-full'>
                    <h3 className="text-xl text-[#222] font-bold tracking-wider my-2">Hình Thức Thanh Toán
                    </h3>
                    <fieldset className="space-y-4">
                        <legend className="sr-only">Thanh toán trực tuyến</legend>
                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden [&:checked_+_label_svg]:block"
                                defaultChecked
                            />

                            <label
                                htmlFor="DeliveryStandard"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Thanh Toán trực Tuyến</p>
                                </div>
                            </label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryPriority"
                                id="DeliveryPriority"
                                className="peer hidden [&:checked_+_label_svg]:block"
                            />

                            <label
                                htmlFor="DeliveryPriority"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Thanh Toán Khi Nhận Được Hàng</p>
                                </div>
                            </label>
                        </div>
                    </fieldset>



                </div>

            </div>
            <h3 className="text-3xl text-[#17c6aa] font-bold tracking-wider my-5 mx-10">Đơn Hàng</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                <div className="md:col-span-2 ">
                    <div className="overflow-x-auto mx-10">
                        <table className=" table min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                            <thead className="ltr:text-left rtl:text-right  ">
                                <tr>
                                    <th className="whitespace-nowrap py-4 px-1 font-medium text-gray-900 text-left text:xs lg:text-xl">
                                       Ảnh 
                                    </th>
                                    <th className="whitespace-nowrap py-4  px-1  font-medium text-gray-900 text-left text:xs lg:text-xl">
                                       Tên 
                                    </th>
                                    <th className="whitespace-nowrap py-4 px-1  font-medium text-gray-900 text-left text:xs lg:text-xl">
                                       Số Lượng
                                    </th>
                                    <th className="whitespace-nowrap py-4 px-1  font-medium text-gray-900 text-left text:xs lg:text-xl">
                                        Giá
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 ">
                                <tr className="">
                                    <td className="whitespace-nowrap font-medium text-gray-900 flex text-left py-4">
                                        <div className="relative">
                                            <img className="w-full h-auto lg:w-40 object-cover md:w-40" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                                            <span className="text-xs absolute top-0 right-0 bg-green-400 p-1 text-white rounded-full hidden sm:block">
                                                50% OFF
                                            </span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap  text-gray-700 py-4 ">
                                        <div className=" items-center ">
                                            <p className="text-xs lg:text-xl md:text-xl">Sản Phẩm 1</p>
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs lg:text-base md:text-xl ">Màu:</span>
                                                <span className=" bg-yellow-500 flex  gap-3 rounded-full w-4 h-4 opacity-70"></span></div>
                                        </div>
                                        <span className="  gap-3 text-xs lg:text-base md:text-xl">Size: S</span>
                                    </td>
                                    <td className="whitespace-nowrap text-gray-700 py-4 px-4">
                                        <div className="flex items-center text-xs lg:text-xl">
                                            <input min={1} max={10} defaultValue={3} className="text-xs lg:text-xl w-10" />
                                        </div>
                                    </td>
                                    <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-xl md:text-xl py-4 px-1 ">$120,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div >
                <div className="col-span-1 mx-10 ">
                    <div className="col-span-1 ">
                        <div className="">
                            <div className='border-2 p-2'>
                                <h3 className='font-bold px-3'>Thông tin điều khoản </h3>
                                <div className='m-5 flex-col'>Bằng cách đặt đơn hàng, bạn dồng ý với điều khoản sủ dụng và bán hàng của sneakerStore và xác nhận rằng bạn đã đọc chính sách quyền riêng tư </div>
                            </div>
                            <div className="mb-4 mt-20 flex justify-between ">
                                <span className="font-bold text-2xl">Tổng (1 mặt hàng) </span>
                                <span className="text-2xl ml-auto">120.000</span>
                            </div>
                            <button className="text-xl mb-2 bg-[#17c6aa] text-white h-[60px] w-full flex items-center justify-center font-sans hover:bg-black hover:text-white">
                    ĐẶT HÀNG
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Orderr