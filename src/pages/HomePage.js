import React, { useState } from 'react';
import { Container } from '../components/commons/containers';
import Gallery from '../components/Gallery';
import { GalleryItem } from '../components/Gallery/Gallery';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import CloseButton from '../assets/CloseButton';

function Home(props) {

  const { movies } = props;
  const [movie, setMovie] = useState('');

  return (
    <Container image={movie.image}>
      <CloseButton onClick={() => setMovie('')} />
      {movie !== ''?
      <>
       <Header title={movie.title} year={movie.year} director={movie.director}
            country={movie.country} synopsis={movie.synopsis}
          />
       </>
         
        :
        <Gallery>
          {
            movies.map((movie) => {
              return <GalleryItem poster={movie.poster} onClick={() => setMovie(movie)}></GalleryItem>
            })
          }
        </Gallery>}


    </Container>
  );
}
export default Home;
