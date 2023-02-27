import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../../services";
const initialState={
    genres:[],
    errors: null,
    loading:null,
    prev: null,
    next: null,
    genresSearch:[]
};
const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_,thunkAPI) => {
        try {
            const {data} = await genresService.getAll();
            return data.genres
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const getById = createAsyncThunk(
    'genreSlice/getById',
    async ({ page, id }, thunkAPI) => {
        try {
            const { data:{results} } = await genresService.getById(id, page);
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const genreSlices = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{

    },
    extraReducers: (value) =>

value
    .addCase(getAll.fulfilled, (state, action) => {
        state.genres = action.payload
        state.loading =false
    })
    .addCase(getById.fulfilled, (state, action)=>{
        const {prev, next} = action.payload
        state.genresSearch = action.payload
        state.prev = prev
        state.next = next
        state.loading = false
    })
})
const {reducer: genreReducer} = genreSlices;

const genreActions ={
    getAll,
    getById

}
export {genreActions, genreSlices,genresService, genreReducer};