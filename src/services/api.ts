import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.github.com/search/",
  baseURL: "http://localhost:3333/",
});

export default api;

//https://api.github.com/search/issues?q=%20repo:ViniOliver01/GitHub-Blog