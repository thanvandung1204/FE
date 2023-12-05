import React, { useEffect, useState } from "react";
import axios from "axios";
import "./a.css";
import Size from "../size/size";

function App() {
  const [data, setData] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setcolor] = useState([]);
  const [users, setuser] = useState([]);
  const [product, setproduct] = useState([]);

  const [editedData, setEditedData] = useState({
    phone: "",
    address: "",
    status: "",
    color: "",
    size: "",
    quantity: 0,
    type_pay: "",
    pay_status: false,
  });
  const [newData, setNewData] = useState({
    phone: 0,
    address: "",
    id_user: 0,
    id_product: 0,
    status: "1",
    color: "",
    size: "",
    quantity: 0,
    type_pay: "",
    pay_status: false,
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/GetAllOrder").then((response) => {
      setData(response.data.data.data);
    });
    // .catch((error) => console.log(error));
    axios.get("http://localhost:8080/api/loadSize").then((response) => {
      setSize(response.data);
    });
    axios.get("http://localhost:8080/api/loadColor").then((response) => {
      setcolor(response.data);
    });
    axios.get("http://localhost:8080/api/loadUser").then((response) => {
      setuser(response.data);
    });
    axios.get("http://localhost:8080/api/loadProduct").then((response) => {
      setproduct(response.data);
    });
  }, []);

  async function deleteOrder(_id) {
    if (_id) {
      const response = await axios.delete(
        `http://localhost:8080/api/deleteOrder/${_id}`
      );
      if (response.status === 200) {
        window.location.reload();
      }
    }
  }

  function updateOrder(_id) {
    const orderToEdit = data.find((order) => order._id === _id);
    setEditedData({
      phone: orderToEdit.phone,
      address: orderToEdit.address,
      status: orderToEdit.status,
      size: orderToEdit.size,
      color: orderToEdit.color,
      quantity: orderToEdit.quantity,
      type_pay: orderToEdit.type_pay,
      pay_status: orderToEdit.pay_status,

    });
  }
  function newDataa() {
    //localhost:8080/api/order/?
    const url = `http://localhost:8080/api/order/`;

    // Thực hiện request GET
    axios
      .post(url, newData)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        } else {
          console.error("Failed to add new order");
        }
      })
      .catch((error) => console.log(error));
  }
  function submitForm(_id) {
    updateOrder(_id);
    // Xây dựng URL với các tham số
    const url = `http://localhost:8080/api/updateOrder/${_id}/?phone=${editedData.phone}&address=${editedData.address}&status=${editedData.status}&size=${editedData.size}&color=${editedData.color}&quantity=${editedData.quantity}&type_pay=${editedData.type_pay}&pay_status=${editedData.pay_status}`;

    // Thực hiện request GET
    axios
      .put(url)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        } else {
          console.error("Failed to update order");
          
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="grid grid-cols-1 gap-3   text-gray-500 font-bold">
      <div id="newData">
        <div className="posXX">Id product</div>

        <div className="posXX">Id user</div>
        <div className="posXX">Phone</div>
        <div className="posXX">Địa chỉ</div>
        <div className="posXX">Size</div>
        <div className="posXX">Màu</div>
        <div className="posXX">TYPE Thanh toán</div>
        <div className="posXX">paid ?</div>

        <div className="posXX">Số lượng</div>

        <div className="posXX">Action</div>

        <div>
          <select
            className="posXX"
            onChange={(e) =>
              setNewData({ ...newData, id_product: e.target.value })
            }
          >
            <option value=""></option>
            {product.map((s) => (
              <option value={s._id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="posXX"
            onChange={(e) =>
              setNewData({ ...newData, id_user: e.target.value })
            }
          >
            <option value=""></option>
            {users.map((s) => (
              <option value={s._id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div
          contentEditable
          className="posXX"
          onInput={(e) =>
            setNewData({ ...newData, phone: e.target.textContent })
          }
        ></div>
        <div
          contentEditable
          className="posXX"
          onInput={(e) =>
            setNewData({ ...newData, address: e.target.textContent })
          }
        ></div>
        <div>
          <select
            className="posXX"
            onChange={(e) => setNewData({ ...newData, size: e.target.value })}
          >
            <option value=""></option>
            {size.map((s) => (
              <option value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="posXX"
            onChange={(e) => setNewData({ ...newData, color: e.target.value })}
          >
            <option value=""></option>
            {color.map((s) => (
              <option value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="posXX"
            onChange={(e) =>
              setNewData({ ...newData, type_pay: e.target.value })
            }
          >
            <option value=""></option>

            <option value="online">Online</option>
            <option value="face">Trực tiếp</option>
          </select>
        </div>

        <div
          contentEditable
          className="posXX"
          onInput={(e) =>
            setNewData({ ...newData, quantity: e.target.textContent })
          }
        ></div>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={newDataa}
        >
          Thêm
        </button>
      </div>
      <h1>Danh sách Order</h1>
      <span>
        <div className="grid-container">
          <div className="bg-red-500 text-white px-4 py-2 rounded">ID</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">ID USER</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">PHONE</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">ĐỊA CHỈ</div>

          <div className="bg-red-500 text-white px-4 py-2 rounded">STATUS</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">SIZE</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">MÀU</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">
            Thanh toán
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">paid?</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">
            Số lượng
          </div>

          <div className="bg-red-500 text-white px-4 py-2 rounded">
            Date_created
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">Action</div>
        </div>
        {data.map((user) => (
          <form
            className="grid grid-cols-12 gap-4   text-gray-500 font-bold"
            key={user._id}
            onSubmit={(e) => {
              e.preventDefault();
              submitForm(user._id);
            }}
          >
            <div className="posXX">{user.id_order}</div>
            <div>
              <select
                className="posXX"
                onChange={(i) => {
                  setEditedData({ ...editedData, id_user: i.target.value });
                }}
              >
                {users.map((s) => (
                  <option value={users._id} selected={user._id == s.id_user}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div
              contentEditable
              className="posXX"
              onInput={(e) =>
                setEditedData({ ...editedData, phone: e.target.textContent })
              }
            >
              {user.phone}
            </div>
            <div
              contentEditable
              className="posXX"
              onInput={(e) =>
                setEditedData({ ...editedData, address: e.target.textContent })
              }
            >
              {user.address}
            </div>
            <div>
              <select
                className="posXX"
                onChange={(e) =>
                  setEditedData({ ...editedData, status: e.target.value })
                }
              >
                <option value="1" selected={user.status === "1"}>
                  Chưa xác nhận
                </option>
                <option value="2" selected={user.status === "2"}>
                  Đã xác nhận
                </option>
                <option value="3" selected={user.status === "3"}>
                  Đang vận chuyển
                </option>
                <option value="4" selected={user.status === "4"}>
                  Hoàn thành
                </option>
                <option value="5" selected={user.status === "5"}>
                  Hủy đơn hàng
                </option>
              </select>
            </div>
            <div>
              <select
                className="posXX"
                onChange={(i) => {
                  setEditedData({ ...editedData, size: i.target.value });
                }}
              >
                {size.map((s) => (
                  <option value={s.name} selected={user.size == s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                className="posXX"
                onChange={(e) =>
                  setEditedData({ ...editedData, color: e.target.value })
                }
              >
                <option value={user.color}> {user.color}</option>

                {color.map((s) => (
                  <option value={s.name} selected={user.color == s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="posXX"
                onChange={(e) =>
                  setEditedData({ ...editedData, type_pay: e.target.value })
                }
              >
                <option value="online" selected={user.type_pay === "online"}>
                  Online
                </option>
                <option value="face" selected={user.type_pay === "face"}>
                  Trực tiếp
                </option>
              </select>
            </div>
            <div>
              <select
                className="posXX"
                onChange={(e) => {
                  if (e.target.value == "false")
                    setEditedData({ ...editedData, pay_status: false });
                  else setEditedData({ ...editedData, pay_status: true });
                }}
              >
                <option value="true" selected={user.pay_status === true}>
                  Đã pay
                </option>
                <option value="false" selected={user.pay_status === false}>
                  Chưa pay
                </option>
              </select>
            </div>
            <div
              contentEditable
              className="posXX"
              onInput={(e) =>
                setEditedData({ ...editedData, quantity: e.target.textContent })
              }
            >
              {user.quantity}
            </div>
            <div className="posXX">{user.date_created}</div>

            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
              >
                Xác Nhận
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => deleteOrder(user._id)}
              >
                Xóa
              </button>
            </div>
          </form>
        ))}
      </span>
    </div>
    
  );
}

export default App;
