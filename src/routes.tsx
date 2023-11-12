import { createBrowserRouter } from "react-router-dom";
import { MyComponent } from "./components";
import { AdminLayout, ClientLayout } from "./layout";
import AdminUser from "./pages/admin/user/user";
import AdminUserAdd from "./pages/admin/user/add";
import AdminEditUser from "./pages/admin/user/edit";
import AdminCustomer from "./pages/admin/customer/customer";
import AdminCustomerAdd from "./pages/admin/customer/add";
import AdminCustomerEdit from "./pages/admin/customer/edit";
import AdminRole from "./pages/admin/role/role";
import AdminRoleAdd from "./pages/admin/role/add";

export const routers = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <ClientLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <MyComponent />,
  //     },
  //   ],
  // },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: "Page admin here",
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
        path: "user/:idUser/edit",
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
    ],
  },
  {
    path: "*",
    element: "NotFound Page nhé",
  },
]);
