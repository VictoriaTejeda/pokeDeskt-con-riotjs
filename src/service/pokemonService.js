import axiosInstance from "./config"
const  getPokemons= (limit= 151)=>axiosInstance.get(`/pokemon?limit=${limit}`)
   
 export default getPokemons;