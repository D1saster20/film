import { apiService } from "./apiService";
import { genre, genreSearch } from "../configs";

const genresService = {
    getAll: () => apiService.get(genre),
    getById: (id, page = 1) =>
        apiService.get(`${genreSearch}${id}`, { params: { page } }),
};

export { genresService };