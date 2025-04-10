// apiConnector.js

import axios from "axios";

// Create an axios instance with default settings
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Comes from your .env file
  withCredentials: true, // Sends cookies (needed for JWT auth)
});

// Generic function to make API requests
export const apiConnector = async (method, url, bodyData = null, headers = {}, params = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData,
      headers,
      params,
    });

    return response;
  } catch (error) {
    // Optional: Add global error handling here
    console.error("API Error:", error);
    throw error;
  }
};
