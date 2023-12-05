import { useState } from "react";
import { Button, Input } from "antd";
import { useGetCartQuery } from "@/api/cart";
import { AiFillTool } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

type Props = object;

const Orderr = (props: Props) => {
  const { data: carts } = useGetCartQuery();
  const cart = carts?.length > 0 ? carts[0] : {};
  const [checkData, setCheckData] = useState([]);
  const [dataCheck, setDataCheck] = useState();
  const [sdt, setDt] = useState();
  const [check, secheck] = useState(false);

  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString);

  const p = userObject.fullname;
  const c = p.split(" ")[1].concat(p.split(" ")[2]);
  const handelRemoveItem = async (id) => {
    await axios.get(
      `http://localhost:8080/api/cart-delete/${userObject._id}/${id}`
    );
    setTimeout(() => {
      window.location.reload();
    }, 500);
    toast.success("done");
  };
  function returnToPay(price, phoneNumber, name, email, address, returnUrl) {
    const url =
      "https://k-ous.pro.vn/vnpay/fast?amount=" +
      price +
      "&txt_inv_mobile=" +
      phoneNumber +
      "&txt_billing_fullname=" +
      name +
      "&txt_ship_addr1=" +
      address +
      "&txt_billing_email=" +
      email +
      "&returnUrl=" +
      returnUrl;
    window.location.href = url;
  }
  const addOrder = async (data) => {
    secheck(true);
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].price * data[i].quantity * 1;
    }
    console.log(sum, "thí");
    if (sdt != undefined && dataCheck != undefined) {
      if (check)
        await axios.post("http://localhost:8080/api/add/many/order", {
          type_pay: "default",
          address: dataCheck,
          phone: sdt,
          id_user: userObject._id,
          data,
        });
      // console.log(data, "o day");

      returnToPay(
        sum,
        sdt,
        userObject.fullname,

        dataCheck,
        userObject.email,

        "http://localhost:5173/"
      );
    }
    //  else {
    //   alert("vui long nhap du thong tin");
    // }
  };

  const handleCheckboxChange = (productId, size, color, quantity, price) => {
    const isProductChecked = checkData.some(
      (item) => item.productId === productId
    );
    if (isProductChecked) {
      const updatedCheckData = checkData.filter(
        (item) => item.productId !== productId
      );
      setCheckData(updatedCheckData);
    } else {
      const newCheckedProduct = {
        productId,
        size,
        color,
        quantity,
        price,
      };
      setCheckData([...checkData, newCheckedProduct]);
    }
  };

  var allMoney = 0;
  if (cart.items != undefined) {
    var s = cart.items;

    for (let i = 0; i < s.length; i++) {
      allMoney += s[i].quantity * s[i].price;
    }
  }

  console.log(s, "thi");
  return (
    <div className="mx-5">
      <h3 className="text-x text-[#222] text-center font-bold tracking-wider my-5">
        Thông Tin đặt Hàng
      </h3>
      {check && (
        <div>
          <div className="sm:flex sm:flex-row">
            <div className="border sm:w-6/12 p-10 mr-5 w-full mb-5">
              <h4 className="text-xl text-[#222]  font-bold tracking-wider my-2">
                Thông tin người đặt
              </h4>
              <div className="flex">
                <div className="mt-2 mr-3 w-2/4">
                  <label className="mb-3" htmlFor="">
                    Họ:
                  </label>
                  <Input
                    defaultValue={p.split(" ")[0]}
                    placeholder="Họ....."
                    className="p-3"
                  />
                </div>
                <div className="mt-2 w-2/4">
                  <label className="mb-3" htmlFor="">
                    Tên:
                  </label>
                  <Input
                    placeholder="Tên....."
                    defaultValue={p.split(" ")[2]}
                    className="p-3"
                  />
                </div>
              </div>
              <div className="mt-2 ">
                <label className="mb-3" htmlFor="">
                  Số Điện Thoại
                </label>
                <Input
                  onChange={(event) => setDt(event.target.value)}
                  placeholder="Số điện thoại.."
                  className=" p-3 w-full"
                />
              </div>
              <div className="my-3">
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
                      <p className="text-gray-700 text-base border-b">
                        địa chỉ của bạn
                      </p>
                      <div>
                        <Input
                          onChange={(event) => setDataCheck(event.target.value)}
                          placeholder="địa chỉ của bạn "
                          className=" p-3 w-full"
                        />
                      </div>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="border sm:w-6/12 p-10 w-full">
              <h3 className="text-xl text-[#222] font-bold tracking-wider my-2">
                Hình Thức Thanh Toán
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

                      <p className="text-gray-700">
                        Thanh Toán Khi Nhận Được Hàng
                      </p>
                    </div>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      )}

      <h3 className="text-3xl text-[#17c6aa] font-bold tracking-wider my-5 mx-10">
        Đơn Hàng
      </h3>

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
                {cart?.items &&
                  cart?.items
                    ?.filter((items) => items.checkOrder == true)
                    .map((cartProduct) => {
                      console.log(cartProduct);

                      return (
                        <tr key={cartProduct._id}>
                          <td className="whitespace-nowrap font-medium text-gray-900 flex text-left py-4">
                            <div className="relative">
                              <img
                                className="w-full h-auto lg:w-40 object-cover md:w-40"
                                alt=""
                                src={cartProduct?.image}
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap  text-gray-700 py-4 ">
                            <div className=" items-center ">
                              <p className="text-xs lg:text-xl md:text-xl">
                                {cartProduct?.productId?.name}
                              </p>
                              <div className="flex items-center gap-1">
                                <span className="text-xs lg:text-base md:text-xl ">
                                  Color: {cartProduct?.color}
                                </span>
                                <span className="flex gap-3 rounded-full w-4 h-4 opacity-70"></span>
                              </div>
                            </div>
                            <span className="  gap-3 text-xs lg:text-base md:text-xl">
                              Size: {cartProduct?.size}
                            </span>
                          </td>
                          <td className="whitespace-nowrap text-gray-700 py-4">
                            <div className="flex items-center text-xs lg:text-xl">
                              <div className="">{cartProduct?.quantity}</div>
                            </div>
                          </td>
                          <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-xl md:text-xl py-4 ">
                            {cartProduct?.productId?.price}
                          </td>
                          <td className="whitespace-nowrap cursor-pointer text-gray-700  text-xs lg:text-2xl  md:text-xl  py-4 ">
                            <AiFillTool />
                          </td>
                          <td
                            onClick={() =>
                              handelRemoveItem(cartProduct.productId._id)
                            }
                            className="whitespace-nowrap cursor-pointer text-gray-700  text-xs lg:text-xl  md:text-xl px-4 py-4 "
                          >
                            <BsFillTrash3Fill />
                          </td>

                          {/* <td
                            onClick={() =>
                              addOrder(
                                cartProduct.productId._id,
                                cartProduct?.size,
                                cartProduct?.color,
                                cartProduct?.quantity,
                                cartProduct?.productId?.price
                              )
                            }
                            className="whitespace-nowrap cursor-pointer text-gray-700  text-xs lg:text-xl  md:text-xl px-4 py-4 "
                          >
                            <Button>Đặt</Button>
                          </td> */}
                          <td>
                            <input
                              onChange={() =>
                                handleCheckboxChange(
                                  cartProduct.productId._id,
                                  cartProduct?.size,
                                  cartProduct?.color,
                                  cartProduct?.quantity,
                                  cartProduct?.productId?.price
                                )
                              }
                              className="w-[35px]"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 mx-10 ">
          <div className="col-span-1 ">
            <div className="">
              <div className="border-2 p-2">
                <h3 className="font-bold px-3">Thông tin điều khoản </h3>
                <div className="m-5 flex-col">
                  Bằng cách đặt đơn hàng, bạn dồng ý với điều khoản sủ dụng và
                  bán hàng của sneakerStore và xác nhận rằng bạn đã đọc chính
                  sách quyền riêng tư{" "}
                </div>
              </div>
              <div className="mb-4 mt-20 flex justify-between ">
                <span className="font-bold text-2xl">Tổng (1 mặt hàng) </span>
                <span className="text-2xl ml-auto">{allMoney}</span>
              </div>

              <button
                onClick={() => addOrder(checkData)}
                className="text-xl mb-2 bg-[#17c6aa] text-white h-[60px] w-full flex items-center justify-center font-sans hover:bg-black hover:text-white"
              >
                ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderr;
