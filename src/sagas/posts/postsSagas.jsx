import { takeLatest } from "redux-saga/effects";
import { handleGetAllPosts, handleDeletePost } from "./handles";
import {
  deletePostRequest,
  postsRequest,
  deletePostSuccess,
} from "./postsSlice";

export default function* postsSagas() {
  yield takeLatest(postsRequest.type, handleGetAllPosts);
  yield takeLatest(deletePostSuccess.type, handleDeletePost);
}
