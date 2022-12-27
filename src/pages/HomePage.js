import React, { useState } from 'react';
import { Container } from '../components/commons/containers';
import { GalleryItem } from '../components/Gallery/Gallery';
import Header from '../containers/Header';
import CloseButton from '../assets/CloseButton';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home(props) {

  const { movies } = props;
  const [movie, setMovie] = useState('');
  const [currentCard, setCurrentCard] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 375, min: 0 },
      items: 1
    }
  };

  return (
    <Container image={movie.image}>
      {movie !== '' ?
        <>
          <CloseButton onClick={() => setMovie('')} />
          <Header title={movie.title} year={movie.year} director={movie.director}
            country={movie.country} synopsis={movie.synopsis} watchId={movie.watchId}
          />
        </>

        :
        <Carousel responsive={responsive}>
          {
            movies.map((movie, key) => {
               return <GalleryItem poster={movie.poster} onClick={() => setMovie(movie)} >
                 
               </GalleryItem>

            })
          }
        </Carousel>}


    </Container>
  );
}
export default Home;
