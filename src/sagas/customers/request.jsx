import axios from "../../axios-interceptor/api";
const COLLECTION_NAME = "customer";
export function getDetailCustomer(token, id) {
  return axios.get(`/${COLLECTION_NAME}/detail?id=${id}`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
}
export function getAllCustomers(token) {
  return axios.get(`/${COLLECTION_NAME}/getAll`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
}
export const createUser = (token, entity) => {
  return axios.post(`/admin/createCustomer`, entity, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
};

export const deleteUser = (token, id) => {
  return axios.delete(`/admin/deleteCustomer?id=${id}`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
};

// headers: {
//     "Content-Type": "multipart/form-data",
//     token: `Bearer ${token}`,
// },
