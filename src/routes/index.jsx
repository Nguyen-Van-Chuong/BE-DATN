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

const router = createBrowserRouter([
  {
    path: "admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>,
      },
      {
        path: "products",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "users",
        element: <UserPage></UserPage>,
      },
      { path: "users/add-user", element: <AddUser></AddUser> },
      {
        path: "posts",
        element: <PostPage></PostPage>,
      },
      {
        path: "posts/add-post",
        element: <AddPost></AddPost>,
      },
      {
        path: "posts/:id",
        element: <Post></Post>,
      },
      {
        path: "users/:id",
        element: <User></User>,
      },
    ],
  },
  {
    path: "admin/login",
    element: <LoginPage />,
  },
]);

export default router;
