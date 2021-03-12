import axios from "axios";
// import { message } from "antd";

const http = axios.create({
  baseURL: "http://159.75.122.22:3001/api",
  timeout: 5000,
});

http.interceptors.request.use(
  function (config) {
    // 判断本地token和id再发送请求
    if (localStorage.getItem("token")) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const usersApi = () => http.get("/userlist");
const searchUsersApi = (model) => http.post("/users/search", model);

export { usersApi, searchUsersApi };
