import axios from "axios";

export interface FetchResponse <T>{
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3fa7784a58b14859978a7b4edb250386"
  }
})