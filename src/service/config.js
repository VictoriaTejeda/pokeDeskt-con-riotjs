import axios from "axios";

const URL='https://pokeapi.co/api/v2/pokemon?limit=151'

const axiosInstance= axios.create({
    baseURL: URL
});

export default axiosInstance;