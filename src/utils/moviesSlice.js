import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        nowPopularMovies: null,
        nowUpcomingMovies: null,
        nowTrendingMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state,action) => {
            state.nowPopularMovies = action.payload
        },
        addUpcomingMovies : (state,action) => {
            state.nowUpcomingMovies = action.payload
        },
        addTrendingMovies : (state,action) => {
            state.nowTrendingMovies = action.payload
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload
        }
    }
})

export const { addNowPlayingMovies , addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer