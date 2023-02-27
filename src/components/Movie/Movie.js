import React from 'react';
import {imgBaseUrl} from "../../configs";

const Movie = ({movie}) => {
        const {title} = movie
    return (
        <div>
            <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />
            <div> {title}</div>

        </div>
    );
};

export {Movie};

