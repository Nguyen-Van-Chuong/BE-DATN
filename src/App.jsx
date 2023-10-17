import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
function App() {
  const { errorGlobal, notifyGlobal } = useSelector((state) => state.global);
  useEffect(() => {
    if (errorGlobal) toast.error(errorGlobal);
  }, [errorGlobal]);
  useEffect(() => {
    if (notifyGlobal) toast.success(notifyGlobal);
  }, [notifyGlobal]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
