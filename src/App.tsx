import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer />
    </>
  );
}

export default App;
