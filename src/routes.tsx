import { createBrowserRouter } from "react-router-dom";
// import { MyComponent } from "./components";
import { AdminLayout, ClientLayout } from "./layout";
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
