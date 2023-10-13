import { useState } from "react";
import DataTable from "../modules/chart/DataTable";
import { userRows } from "../../data";
import AddUser from "../modules/user/AddUser";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70, disableColumnMenu: true },
  {
    field: "img",
    headerName: "Avatar",
    disableColumnMenu: true,
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
    disableColumnMenu: true,
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
  return (
    <div className="users">
      <div className="flex items-center gap-5 mb-5 info">
        <h1>Users</h1>
        <Link
          className="px-4 py-2 rounded-sm bg-slate-400"
          to={"/admin/users/add-user"}
        >
          Thêm người dùng
        </Link>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
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
