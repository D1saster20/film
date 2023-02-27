
import {apiService} from "./apiService";
import {movie, movieInfo} from "../configs";


const moviesService = {
    getAll:(page = [1])=> apiService.get(movie,{params: {page}}),
    getById: (id) => apiService.get(`${movieInfo}/${id}`)
}


export {moviesService}