import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from "./Genre.module.css"
import {genreActions} from "../redux/slices/genreSlices";

import {Link} from "react-router-dom";

const MoviesGenre = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector (state => state.genres)
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);
    return (

        <div className={css.genres}>

            {genres.map(genre => (
                <Link to={`/genre/${genre.id}`} key={genre.id}>
                    <div>{genre.name}</div>
                </Link>
            ))}

        </div>
    );
};

export default MoviesGenre;