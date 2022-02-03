import axios from "axios";

export const api = axios.create({
  baseURL: "https://fake-api-capstone.herokuapp.com",
});

export const imgurApi = axios.create({
  baseURL: "https://api.imgur.com/",
});
