const token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWE4NmQ2MDA4NjVmOWNiODk2MzA5YzhmOTU2ZDIwYyIsInN1YiI6IjYzZjBiZDczNGE0YmZjMDBmMDdjZDA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MB3z25YVrk1hqDrZk-briqa-Zzjnoy8JWgzt56Sabc';

const baseURL = 'https://api.themoviedb.org/3';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'

const movie = '/discover/movie?'

const movieInfo = '/movie'

const genre ='/genre/movie/list'

const genreSearch= '/discover/movie?with_genres='

const searchMovie = '/search/keyword?'
export {
    token, baseURL, movie, imgBaseUrl, genre, movieInfo, genreSearch, searchMovie
}