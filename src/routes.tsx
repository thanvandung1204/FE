import { createBrowserRouter } from "react-router-dom";

import { AdminLayout, ClientLayout } from "./layout";

import AdminUser from "./pages/admin/user/user";
import AdminUserAdd from "./pages/admin/user/add";
import AdminEditUser from "./pages/admin/user/edit";
import AdminCustomer from "./pages/admin/customer/customer";
import AdminCustomerAdd from "./pages/admin/customer/add";
import AdminCustomerEdit from "./pages/admin/customer/edit";
import AdminRole from "./pages/admin/role/role";
import AdminRoleAdd from "./pages/admin/role/add";

import Product from "./pages/admin/Product/Product"


import AddProduct from "./pages/admin/Product/AddProduct"
import Size from "./pages/admin/size/size"
import AddSize from "./pages/admin/size/AddSize"
import UpdateProduct from "./pages/admin/Product/UpdateProduct";
import RecycleBin from "./pages/admin/Product/recycle-bin";
import UpdateSize from "./pages/admin/size/UpdateSize";
import ImageProduct from "./pages/admin/imageProduct/imageProduct"
import AddImage from "./pages/admin/imageProduct/AddImage";
export const routers = createBrowserRouter([

  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        // index: true,
        // element: <MyComponent />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "product",
        element: <Product products={[]}/>,
      },
      {

        path: "user",
        element: <AdminUser />,
      },
      {
        path: "user/add",
        element: <AdminUserAdd />,
      },
      {
        path: "user/:id/edit",
        element: <AdminEditUser />,
      },
      {
        path: "customer",
        element: <AdminCustomer />,
      },
      {
        path: "customer/add",
        element: <AdminCustomerAdd />,
      },
      {
        path: "customer/:id",
        element: <AdminCustomerEdit />,
      },
      {
        path: "role",
        element: <AdminRole />,
      },
      {
        path: "role/add",
        element: <AdminRoleAdd />,
      },

        path: "product/add",
        element: <AddProduct/>,
  
      },
      {
        path: "product/update/:id",
        element: <UpdateProduct/>,
      },
      {
        path: "product/recycle",
        element: <RecycleBin/>,
      },
      {
        path: "size",
        element: <Size/>,
      },
      {
        path: "size/add",
        element: <AddSize/>,
      },
      {
        path: "size/update/:id",
        element: <UpdateSize/>,
      },
      {
        path: "imageProduct",
        element: <ImageProduct/>,
      },
      {
        path: "imageProduct/add",
        element: <AddImage/>,
      },
      // {
      //   path: "size/update/:id",
      //   element: <UpdateSize/>,
      // },

     
      

    ],
  },

  {
    path: "*",
    element: "NotFound Page nhé",
  },
 
  
]);
