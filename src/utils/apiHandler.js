import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://admin.futuredroop.com/api",
  headers: {
    "Accept-Language": "ar",
  },
});
