import React, { useState, useEffect } from 'react';
import { Item } from './Item';

function GalleryItem(props) {

    const { movies, onclick, visibility, key } = props;

    useEffect(()=>{
        console.log("Visibility", visibility)
    }, [])

    return (
        <>
            {
                visibility ?
                <Item>
                    {props.children}
                    <p>{key}</p>
                </Item>
                : <></>    
            }
        </>
    )
}

export default GalleryItem;
