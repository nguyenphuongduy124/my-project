import axios from "axios";
const url = "https://5ee2f60a8b27f3001609512a.mockapi.io/api";
export const axiosGet = (endpoint) => {
  return axios({
    method: "get",
    url: `${url}/${endpoint}`,
  });
};

export const axiosPost = (endpoint, data = null) => {
  return axios({
    method: "post",
    url: `${url}/${endpoint}`,
    data: data,
  });
};

export const axiosDelete = (endpoint) => {
  return axios({
    method: "delete",
    url: `${url}/${endpoint}`,
  });
};

export const axiosUpdate = (endpoint, data = null) => {
  return axios({
    method: "put",
    url: `${url}/${endpoint}`,
    data: data,
  });
};
