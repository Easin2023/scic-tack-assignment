import axios from 'axios';

const config = axios.create({
     // baseURL: 'http://localhost:5000'
     baseURL: 'https://todo-tack-srver.vercel.app'
})

const useAxios = () => {
     return config;
};

export default useAxios;