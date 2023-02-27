import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService, searchMovieService} from "../../../services";

const initialState={
    movies:[],
    errors: null,
    loading:null,
    prev: null,
    next: null,
    selectedMovie:[],
    searchMovie:[]
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data:{results}} = await moviesService.getAll(page);
            return results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id},thunkAPI) => {
        try {
            const {data} = await moviesService.getById(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({ page, query }, thunkAPI) => {
        try {
            const { data: { results, prev, next } } = await searchMovieService.getAll(page, query);
            return { results, prev, next };
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

        },
    extraReducers: (value) =>
        value
                .addCase(getAll.fulfilled, (state, action) => {
                    const {prev, next} = action.payload
                    state.movies = action.payload
                    state.prev = prev
                    state.next = next
                    state.loading = false
                })
                .addCase(getById.fulfilled, (state, action) => {
                    state.selectedMovie = action.payload
                })
                .addCase(searchMovie.fulfilled,(state, action)=>{
                    const {prev, next} = action.payload
                    state.searchMovie = action.payload
                    state.prev = prev
                    state.next = next
                    state.loading = false
                })
    })
const {reducer: movieReducer } = movieSlice;

const movieActions ={
    getAll,
    getById,
    searchMovie

}
export {
    movieReducer,
    movieActions,
    movieSlice
}