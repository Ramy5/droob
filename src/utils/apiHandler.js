import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://droob.medicalvisionarabia.com/api",
  headers:{
    "Accept-Language":"ar"
  }
});

