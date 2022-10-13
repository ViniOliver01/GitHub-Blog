import axios from "axios";
// 

const githubApi = axios.create({
  baseURL: "https://api.github.com/users/vinioliver01",
});

export default githubApi;