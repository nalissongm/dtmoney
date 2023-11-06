import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-gm.netlify.app/api",
});
