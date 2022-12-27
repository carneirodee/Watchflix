import './App.css';
import React, { useEffect } from 'react';
import { fetchMovies } from './actions/movies.actions';
import { useDispatch, useSelector } from "react-redux";
import HomePage from './pages/HomePage';
import Loading from './pages/Loading';

function App() {

  const moviesState = useSelector(state => state.moviesReducer)
  const dispatch = useDispatch();
  const { isLoadingMovies } = moviesState;

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  if (isLoadingMovies === true && isLoadingMovies === true) {
    return (
      <Loading />
    )
  } else {
    console.log("Movies", moviesState)

    return (
      <HomePage
        movies={moviesState.movies}
      />
    );
  }

}
export default App;
