import DataTable from "../modules/chart/DataTable";
import { products } from "../../data";
import AddPost from "../modules/post/AddPost";
import useClickOutSide from "../../hooks/useClickOutSide";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  // {
  //   field: "color",
  //   type: "string",
  //   disableColumnMenu: true,
  //   headerName: "Color",
  //   width: 100,
  // },
  // {
  //   field: "price",
  //   type: "string",
  //   headerName: "Price",
  //   width: 120,
  // },
  // {
  //   field: "producer",
  //   headerName: "Producer",
  //   type: "string",
  //   width: 150,
  // },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
    valueGetter: (params) => {
      const originalDate = params.row.date;
      const formattedDate = new Date(originalDate).toLocaleDateString();
      return formattedDate;
    },
  },
  {
    field: "inStock",
    disableColumnMenu: true,
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];
const UserPage = () => {
  const { nodeRef, setShow, show } = useClickOutSide();
  const { posts: postApi } = useSelector((state) => state.posts);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(postApi);
  }, [postApi]);
  const dataWithId = posts.map((row, index) => ({
    id: index + 1, // Tạo id tùy chỉnh dựa trên index
    ...row,
  }));
  return (
    <div className="users">
      <div className="flex items-center gap-5 mb-5 info">
        <h1>POST</h1>
        <Link
          className="px-4 py-2 rounded-sm bg-slate-400"
          to={"/admin/posts/add-post"}
        >
          Thêm bài viết
        </Link>
      </div>

      <DataTable slug="posts" columns={columns} rows={dataWithId} />
    </div>
  );
};

export default UserPage;
