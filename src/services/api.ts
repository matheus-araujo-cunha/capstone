import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-capstone-grup4.herokuapp.com",
});
