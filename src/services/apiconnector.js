// apiConnector.js

import axios from "axios";

// Create an axios instance with default settings
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Comes from your .env file
  withCredentials: true, // Sends cookies (needed for JWT auth)
});
export const apiConnector = async (method, url, bodyData, headers, params) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData || null,
      headers: headers || null,
      params: params || null,
    });
    return response;
  } catch (error) {
    console.error("❌ API Error:", error?.message);
    if (error?.response) {
      console.error("➡️ Response:", error.response);
    } else if (error?.request) {
      console.error("➡️ Request:", error.request);
    }
    throw error;
  }
};
