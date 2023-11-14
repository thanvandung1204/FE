import { createBrowserRouter } from "react-router-dom";
// import { MyComponent } from "./components";
import { AdminLayout, ClientLayout } from "./pages/layout"
import Product from "./components/admin/Product/Product"

import AddProduct from "./components/admin/Product/AddProduct"
import Size from "./components/admin/size/size"
import AddSize from "./components/admin/size/AddSize"
import UpdateProduct from "./components/admin/Product/UpdateProduct";
import RecycleBin from "./components/admin/Product/recycle-bin";
import UpdateSize from "./components/admin/size/UpdateSize";
import ImageProduct from "./components/admin/imageProduct/imageProduct"
import AddImage from "./components/admin/imageProduct/AddImage";
import HomeAdmin from "./pages/layout/Admin/home_admin";
import ListComment from "./components/admin/comment/list";
import SuaImageTinTuc from "./components/admin/imagetintuc/update";
import ThemImageTinTuc from "./components/admin/imagetintuc/add";
import ImageTinTuc from "./components/admin/imagetintuc/list";
import ThemTinTuc from "./components/admin/tintuc/add";
import DanhSachTinTuc from "./components/admin/tintuc/list";
import SuaTinTuc from "./components/admin/tintuc/update";
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
      {
        path: "/admin",
        element: <HomeAdmin/>,
      },
      {
        path: "tintuc",
        element: <DanhSachTinTuc/>,
      },
      {
        path: "tintuc/add",
        element: <ThemTinTuc/>,
      },
      {
        path: "tintuc/:id",
        element: <SuaTinTuc/>,
      },
      {
        path: "imagetintuc",
        element: <ImageTinTuc/>,
      },
      {
        path: "imagetintuc/add",
        element: <ThemImageTinTuc/>,
      },
      {
        path: "imagetintuc/:id",
        element: <SuaImageTinTuc/>,
      },
      {
        path: "comments",
        element: <ListComment/>,
      },
     
      
    ],
  },
  {
    path: "*",
    element: "NotFound Page nhé",
  },
]);
