import axios from 'axios';

const config = axios.create({
     baseURL: 'http://localhost:5000'
})

const useAxios = () => {
     return config;
};

export default useAxios;