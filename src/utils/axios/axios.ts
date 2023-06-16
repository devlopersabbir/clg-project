import axios from "axios";

export const noticeAPI: string = "http://www.bteb.gov.bd/api"
export const baseURL: string = "https://btebresultsbd.com/api";

export const publicAxios = axios.create({
  baseURL,
});

export const noticeRequiest = axios.create({
  baseURL: noticeAPI,
  withCredentials: true
})
