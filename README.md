# Budget Tracker App

A simple budget tracker app built with Vue.js and Tailwind CSS.


## Features

- User can create a new budget
- User can view all budgets
- User can view a single budget
- User can update a budget
- User can delete a budget
- Filter budgets by date
- Show total expenses 
- Show total income
- Show total balance
- Responsive design

## Technologies

- Vue.js
- Vuex
- Vue Router
- Axios
- Native UI components
- Tailwind CSS

## API
```javascript
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
```
## Environment Variables
```
VUE_APP_API_URL=http://localhost:5001/api
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
