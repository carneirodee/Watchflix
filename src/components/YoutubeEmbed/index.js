import React, { useState, useEffect } from 'react';
import { Iframe } from './Iframe';

function YoutubeEmbed(props) {

    const { watchId } = props;

    return (
        <Iframe width="425" height="120" src={`https://www.youtube.com/embed/${watchId}`} title="How to host a website for FREE - Google Firebase Website Hosting Tutorial Step By Step for beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    )
}

export default YoutubeEmbed;
