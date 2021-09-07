import axios from "axios";
const axiosFetch = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT, // TODO: take this api URL from env
    timeout: 300,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  