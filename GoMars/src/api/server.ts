import axios, { AxiosInstance } from "axios";

export const server: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NSIsImF1dGgiOiIxMjM0NSIsImV4cCI6MTY5MDI4NzI2NywiaWF0IjoxNjkwMjUxMjY3fQ.zVL5lLkeStlxFnZ78eq1Fp10Sce4Mx4f9mz-heHToV0",
  },
});
