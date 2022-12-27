const INITIAL_STATE = {
    isLoadingMovies: true,
    movies: [],
    movie: {},
    errorData: [],
    error: false
}

export const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_MOVIES_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingMovies: true,
            };
        case 'GET_MOVIES_SUCCESS':
            console.log(action)
            const { movies } = action;

            return {
                ...state,
                isLoadingMovies: false,
                movies: movies,
            };
        case 'GET_MOVIES_ERROR':
            console.log(action)
            return {
                ...state,
                errorData: action.data,
                error: true
            };
        case 'GET_MOVIE_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingMovies: true,
            };
        case 'GET_MOVIE_SUCCESS':
            console.log(action)
            const { movie } = action;

            return {
                ...state,
                isLoadingMovies: false,
                movies: movie,
            };
        case 'GET_MOVIE_ERROR':
            console.log(action)
            return {
                ...state,
                errorData: action.data,
                error: true
            };
        default:
            return state;
    }

}

