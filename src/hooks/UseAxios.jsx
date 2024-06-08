import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001' // Ensure this URL is correct
});

const UseAxios = () => {
    return axiosSecure;
};

export default UseAxios;
