import { createBrowserRouter } from "react-router-dom";
import { MyComponent } from "./components";
import { AdminLayout, ClientLayout } from "./layout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <MyComponent />,
      },
    ],
  },
  
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: "Page admin here",
      },
    ],
  },

  {
    path: "*",
    element: "NotFound Page nhé",
  },
 
  
]);
