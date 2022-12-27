import React, { useState, useEffect } from 'react';
import { GalleryContainer, GalleryItem } from './Gallery';
import {setMovie} from '../../actions/movies.actions';

function Gallery(props) {

    const { movies,  onclick } = props;

    return (
        <GalleryContainer>
         {props.children}
        </GalleryContainer>
    )
}

export default Gallery;
