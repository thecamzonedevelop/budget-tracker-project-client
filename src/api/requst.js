import axios from "axios";

export default (url, method, params) => {
  let header = {};
  if (method === "post") {
    header["content-type"] = "application/json";
  }
  let apiURL = process.env.VUE_APP_BASE_API + url;
  return new Promise((resolve, reject) => {
    axios({
      url: apiURL,
      method: method,
      header: header,
      data: params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
