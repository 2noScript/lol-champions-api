import axios from "axios";
import "dotenv/config";

const instanceAxios = axios.create({});

instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default async function request(options) {
  return instanceAxios(options);
}

export default function request(_options) {
  const parsedUrl = new URL(_options.url);
  const referer = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  const origin = `${parsedUrl.protocol}//${parsedUrl.host}/`;
  const options = {
    headers: {
      Referer: referer,
      Origin: origin,
      "X-Requested-With": "XMLHttpRequest",
      ...randomHeaders(),
    },
    withCredentials: true,
    method: "GET",
    ..._options,
  };
  return instanceAxios(options);
}