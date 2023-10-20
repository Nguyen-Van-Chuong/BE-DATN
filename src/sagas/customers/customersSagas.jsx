import { takeLatest } from "redux-saga/effects";
import {
  handleDeleteUser,
  handleGetAllCustomers,
  handleGetDetailCustomer,
  handleCreateUser,
} from "./handles";
import {
  customerDetailRequest,
  customersRequest,
  deleteUser,
  createUser,
} from "./customersSlice";

export default function* customersSagas() {
  yield takeLatest(customerDetailRequest.type, handleGetDetailCustomer);
  yield takeLatest(customersRequest.type, handleGetAllCustomers);
  yield takeLatest(deleteUser.type, handleDeleteUser);
  yield takeLatest(createUser.type, handleCreateUser);
}
