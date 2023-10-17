import { createBrowserRouter, useNavigate } from "react-router-dom";
import DashboardLayout from "../admin/layout/dashboardLayout";
import HomePage from "../admin/pages/HomePage";
import UserPage from "../admin/pages/UserPage";
import ProductPage from "../admin/pages/ProductPage";
import LoginPage from "../admin/pages/LoginPage";
import PostPage from "../admin/pages/PostPage";
import User from "../admin/modules/user/User";
import Post from "../admin/modules/post/Post";
import AddUser from "../admin/modules/user/AddUser";
import AddPost from "../admin/modules/post/AddPost";
import { useSelector } from "react-redux";
import PrivateRouter from "./PrivateRouter";
import { ADMIN_ROUTE } from "./AdminRouter";

const router = createBrowserRouter([
  {
    path: "admin/login",
    element: <LoginPage />,
  },
  {
    path: "admin",
    element: <PrivateRouter></PrivateRouter>,
    children: [ADMIN_ROUTE],
  },
]);

export default router;
