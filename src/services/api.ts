import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-capstone-grupo4.herokuapp.com/",
});
