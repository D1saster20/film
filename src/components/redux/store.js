import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genreSlices";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});
const store = configureStore({
    reducer: rootReducer
});

export {
    store
};