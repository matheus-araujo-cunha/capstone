import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-capstone-grupo4.herokuapp.com",
});

export const imgurApi = axios.create({
  baseURL: "https://api.imgur.com/",
});
