import axios from 'axios';

export default (url, method, params) => {
  let headers = {};
  if (method === "post") {
    headers["content-type"] = "application/json";
  }
  let apiURL = process.env.VUE_APP_BASE_API + url;
  return new Promise((resolve, reject) => {
    axios({
      url: apiURL,
      method: method,
      headers: headers,
      data: params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.error('Request error:', err.response ? err.response.data : err.message);
        reject(err);
      });
  });
};
