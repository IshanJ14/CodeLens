import axios from "axios";

//If the backend URL changes later, we only update one file
const api = axios.create({
    baseURL: "http://localhost:8000",
});

export default api;