import { call, put } from "redux-saga/effects";
import { getAllPost, deletePost } from "./request";
import {
  getPostsSuccess,
  requestFailure,
  deletePostSuccess,
} from "./postsSlice";
import { toast } from "react-toastify";

export function* handleGetAllPosts({ payload }) {
  try {
    const response = yield call(getAllPost, payload);
    if (response?.data) {
      yield put(getPostsSuccess(response.data?.reverse()));
    } else {
      yield put(getPostsSuccess([]));
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}
export function* handleDeletePost({ payload }) {
  try {
    const response = yield call(deletePost, payload.token, payload.id);
    // console.log(response);
    if (response?.data) {
      toast.success(response.data?.message);
    }
  } catch (error) {}
}

// export function* registerCustomer({ payload }) {
//     try {
//         const response = yield call(registerAuth, payload);
//         if (response) {
//             yield put(registerSuccess())
//             toast.success(response.data?.message)
//         }

//     } catch (error) {
//         yield put(requestFailure(error.response.data.message));
//     }
// }
