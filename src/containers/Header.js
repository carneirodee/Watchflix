import React from 'react';
import { Title, Subtitle, Description } from '../components/commons/titles/Titles';
import YoutubeEmbed from '../components/YoutubeEmbed';
import {ContainerMovie} from '../components/commons/containers'
function Header(props) {

    const { title, country, year, director, synopsis, watchId } = props;

    return (
        <ContainerMovie>
            <Title>{title}</Title>
            <Subtitle> {year} / {country} / {director}</Subtitle>
            <Description>{synopsis}</Description>
            <YoutubeEmbed watchId={watchId}/>

        </ContainerMovie>

    );

}


export default Header;

