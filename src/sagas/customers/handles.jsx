import { call, put } from "redux-saga/effects";
import {
  deleteUser,
  getAllCustomers,
  getDetailCustomer,
  createUser,
} from "./request";
import {
  customerDetailSuccess,
  customersSuccess,
  requestFailure,
} from "./customersSlice";
import { setNotifyGlobal } from "../global/globalSlice";

export function* handleGetDetailCustomer({ payload }) {
  try {
    const response = yield call(getDetailCustomer, payload.token, payload.id);
    if (response) {
      yield put(customerDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(requestFailure(error.response.data.message));
  }
}

export function* handleGetAllCustomers({ payload }) {
  try {
    const response = yield call(getAllCustomers, payload);
    if (response) {
      yield put(customersSuccess(response.data));
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}
export function* handleCreateUser({ payload }) {
  try {
    yield put(setNotifyGlobal(""));
    const response = yield call(createUser, payload?.admin, payload?.values);

    if (response) {
      yield put(setNotifyGlobal(response.data?.message));
    }
  } catch (error) {}
}
export function* handleDeleteUser({ payload }) {
  const { token, id } = payload;
  try {
    yield put(setNotifyGlobal(""));
    const response = yield call(deleteUser, token, id);
    if (response) {
      yield put(setNotifyGlobal(response.data?.message));
    }
  } catch (error) {}
}
