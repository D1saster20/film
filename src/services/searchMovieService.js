import {apiService} from "./apiService";
// import {searchMovie} from "../configs";

const searchMovieService = {
    getAll: (page = 1, query) => apiService.get("search/movie", { params: { page, query } }),
};
export {searchMovieService}