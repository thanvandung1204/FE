import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
function App() {
  return (
    // <div>
    //   <h1 className="">Base react</h1>
    //   <MyComponent />
    // </div>
    <RouterProvider router={routers} />
    
    
  );
}

export default App;
