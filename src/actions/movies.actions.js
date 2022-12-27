import { getMovies } from '../api';

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";
export const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_ERROR = "GET_MOVIE_ERROR"

export const fetchMovies = () => async(dispatch) => {
    await dispatch({ type: GET_MOVIES_REQUEST, isLoadingMovies: false });
    try {
        const response = await getMovies();
        return dispatch({
            type: GET_MOVIES_SUCCESS,
            movies: response,
        });
    } catch (err) {
        return dispatch({ type: GET_MOVIES_ERROR, err });
    }
};

export const setMovie = (movie) => async(dispatch) => {
    console.log(movie)
    await dispatch({ type: GET_MOVIE_REQUEST, isLoadingMovies: false });
    try {
        return dispatch({
            type: GET_MOVIE_SUCCESS,
            movie: movie,
        });
    } catch (err) {
        return dispatch({ type: GET_MOVIE_ERROR, err });
    }
};