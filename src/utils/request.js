import axios from "axios";
import "dotenv/config";
import { randomHeaders } from "./browser-headers.js";

const instanceAxios = axios.create();

instanceAxios.defaults.baseURL = process.env.ORIGIN_HOST;

instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default function request(_options) {
  const parsedUrl = new URL(process.env.ORIGIN_HOST);
  const host = parsedUrl.hostname;
  const referer = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  const origin = `${parsedUrl.protocol}//${parsedUrl.host}/`;
  const options = {
    headers: {
      Referer: referer,
      Origin: origin,
      Host: host,
      "X-Requested-With": "XMLHttpRequest",
      ...randomHeaders(),
    },
    withCredentials: true,
    method: "GET",
    ..._options,
  };
  return instanceAxios(options);
}
