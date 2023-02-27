// import React, {useEffect, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {movieActions} from "../redux";
// import {useSearchParams} from "react-router-dom";
//
// const Search = () => {
//     const dispatch = useDispatch();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [query, setQuery] = useSearchParams({ page: '1' });
//     const searchResults = useSelector((state) => state.movies.searchMovie);
//
//     useEffect(() => {
//         dispatch(movieActions.getAll({ page: query.get('page') }));
//     }, [dispatch, query]);
//
//     const handleSearch = (event) => {
//         event.preventDefault();
//         dispatch(movieActions.searchMovie({ page: 1, query: searchTerm }));
//     };
//
//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSearch}>
//                 <input type="text" value={searchTerm} onChange={handleInputChange} />
//                 <button type="submit">Search</button>
//             </form>
//             {searchResults?.results && searchResults.results.length > 0 && (
//                 <>
//                     <ul>
//                         {searchResults.results.map((movie) => (
//                             <li key={movie.id}>{movie.title}</li>
//                         ))}
//                     </ul>
//                     <div>
//                         <button disabled={+query.get('page') === 1} onClick={() => setQuery((query) => ({ page: +query.get('page') - 1 }))}>prev</button>
//                         <button onClick={() => setQuery((query) => ({ page: +query.get('page') + 1 }))}>next</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default Search;
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {movieActions} from "../redux";
import {Link, useSearchParams} from "react-router-dom";
import {imgBaseUrl} from "../../configs";
import css from "./Search.module.css"

const Search = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useSearchParams({ page: '1' });
    const searchResults = useSelector((state) => state.movies.searchMovie);

    useEffect(() => {
        dispatch(movieActions.getAll({ page: query.get('page') }));
    }, [dispatch, query]);

    useEffect(() => {
        if (searchTerm) {
            dispatch(movieActions.searchMovie({ page: 1, query: searchTerm }));
            setQuery({ page: '1' });
        }
    }, [dispatch, searchTerm, setQuery]);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    return (
        <div className={css.SearchPage}>
            <form onSubmit={handleSearch}>
                <input className={css.input} type="text" value={searchTerm} onChange={handleSearch} />
                <button className={css.button} type="submit">Search</button>
            </form>
            <div className={css.results}>
            {searchResults?.results && searchResults.results.length > 0 && (
                <div className={css.oneFilm}>
                        {searchResults.results.map((movie) => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />
                        <div>{movie.title}</div>

                    </Link>
                        ))}

                </div>
            )}
            </div>
        </div>
    );
};

export default Search;







