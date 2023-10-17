import { useState } from "react";
import DataTable from "../modules/chart/DataTable";
import { userRows } from "../../data";
import AddUser from "../modules/user/AddUser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const columns = [
  { field: "_id", headerName: "ID", width: 70, disableColumnMenu: true },
  {
    field: "img",
    headerName: "Avatar",
    disableColumnMenu: true,
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "full_name",
    type: "string",
    headerName: "Tên đầy đủ",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "address",
    type: "string",
    headerName: "Địa chỉ",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Ngày tạo",
    width: 150,
    type: "string",
    disableColumnMenu: true,
    valueGetter: (params) => {
      const originalDate = params.row.createdAt;
      const formattedDate = new Date(originalDate).toLocaleDateString();
      return formattedDate;
    },
  },
  {
    field: "verified",
    headerName: "Verified",
    disableColumnMenu: true,
    width: 90,
    type: "boolean",
  },
];
const UserPage = () => {
  const { customers } = useSelector((state) => state.customers);
  const dataWithId = customers.map((row, index) => ({
    id: index + 1, // Tạo id tùy chỉnh dựa trên index
    ...row,
  }));
  return (
    <div className="users">
      <div className="flex items-center gap-5 mb-5 info">
        <h1>Người dùng</h1>
        <Link
          className="px-4 py-2 rounded-sm bg-slate-400"
          to={"/admin/users/add-user"}
        >
          Thêm người dùng
        </Link>
      </div>
      <DataTable slug="users" columns={columns} rows={dataWithId} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
    </div>
  );
};

export default UserPage;
