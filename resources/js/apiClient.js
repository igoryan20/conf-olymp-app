import axios from "axios";

export default axios.create({
    baseURL: 'https://conf-olymp-app',
    withCredentials: true
});

