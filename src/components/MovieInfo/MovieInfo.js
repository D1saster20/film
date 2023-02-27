
import React, { useEffect } from 'react';
import { movieActions } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import {imgBaseUrl} from "../../configs";
import css from "./MovieInfo.module.css"

const MovieInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const maxStars = 5;
    const { selectedMovie } = useSelector(state => state.movies);
    const starsCount = Math.round(selectedMovie.vote_average / 2);
    const stars = starsCount >= 0 ? '⭐'.repeat(starsCount) : '';
    const emptyStars = '☆'.repeat(maxStars - stars.length);
    const rating = stars + emptyStars;

    useEffect(() => {
        dispatch(movieActions.getById({ id }));
    }, [dispatch, id]);

    return (
        <div className={css.MovieInfo}>
            <div className={css.information}>

            <div><h1 className={css.title}>{selectedMovie.title}</h1></div>
                <div className={css.sectors}>
            <div className={css.blockPoster}>
                <img className={css.img} src={`${imgBaseUrl}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                <div className={css.stars}>Rating {rating} {selectedMovie.vote_average}</div>
            </div>
                    <div>
                        <h2>Description</h2>
                        <div className={css.text}>{selectedMovie.overview}</div>
                        <h2>Genres</h2>
                        <div className={css.genres}>
                            {selectedMovie.genres && selectedMovie.genres.map((genre) =>
                                <Link to={`/genre/${genre.id}`} key={genre.id}>
                                    <div className={css.genre}>{genre.name}</div>
                                </Link>
                            )}
                        </div>
                        <h2>Company Production</h2>
                        <div>
                            {selectedMovie.production_companies && selectedMovie.production_companies.map((company) =>
                                <div className={css.text}>{company.name}</div>
                            )}
                        </div>
                        <h2>Country Production</h2>
                        <div>
                            {selectedMovie.production_countries && selectedMovie.production_countries.map((country)=>
                            <div className={css.text}>{country.name}</div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export { MovieInfo };