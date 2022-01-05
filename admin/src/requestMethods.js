import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU5YWNhNTIwYzU0ZjA4MTdmMmY0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTQxMzkyMSwiZXhwIjoxNjQxNjczMTIxfQ.lytFugjsvU8Ylgz7DzWAQzVrNSTwWSleHakvWqTHZSs";
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
