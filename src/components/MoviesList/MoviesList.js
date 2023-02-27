import React, {useEffect} from 'react';

import {movieActions,} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {Link, useSearchParams} from "react-router-dom";
import css from "./MoviesList.module.css"


const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector (state => state.movies)
    const [query, setQuery] = useSearchParams({page:'1'});


    useEffect(() => {
        dispatch(movieActions.getAll({page:query.get('page')}))
    }, [dispatch,query]);

    return (
        <div className={css.MovieList}>
            <div className={css.buttons}>
                <button
                    className={css.button}
                    disabled={+query.get('page') === 1}
                    onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}
                >
                    Prev
                </button>
                <button
                    className={css.button}
                    disabled={+query.get('page') === 500}
                    onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}
                >
                    Next
                </button>
            </div>
            <div className={css.oneFilm}>
                {movies.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <Movie movie={movie} />
                    </Link>
                ))}
            </div>
            <div className={css.buttons}>
                <button
                    className={css.button}
                    disabled={+query.get('page') === 1}
                    onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}
                >
                    Prev
                </button>
                <button
                    className={css.button}
                    disabled={+query.get('page') === 500}
                    onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MoviesList;