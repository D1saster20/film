
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams, useSearchParams } from 'react-router-dom';
import { imgBaseUrl } from '../../configs';
import { genreActions } from '../redux/slices/genreSlices';
import css from "./searchGenre.module.css";

const SearchGenre = () => {
    const { id } = useParams();
    const [query, setQuery] = useSearchParams({ page: '1' });
    const dispatch = useDispatch();
    const { genresSearch } = useSelector((state) => state.genres);

    useEffect(() => {
        dispatch(genreActions.getById({id,  page: query.get('page') }));
    }, [dispatch, id, query]);

    return (
        <div className={css.SearchGenre}>
            <div className={css.buttons}>
                <button className={css.button} disabled={+query.get('page') === 1} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button className={css.button} onClick={() => setQuery(query=>({ page: +query.get('page') + 1 }))}>next</button>
            </div>
            <div className={css.oneFilm}>
            {genresSearch.map((genre) => (
            <Link to={`/movies/${genre.id}`} key={genre.id}>
            {<img src={`${imgBaseUrl}${genre.poster_path}`} alt={genre.title} />}
                {<div>{genre.title}</div>}
            </Link>
            ))}
            </div>
            <div className={css.buttons}>
            <button className={css.button} disabled={+query.get('page') === 1} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
            <button className={css.button} onClick={() => setQuery(query=>({ page: +query.get('page') + 1 }))}>next</button>
            </div>

        </div>
    );
};

export { SearchGenre };