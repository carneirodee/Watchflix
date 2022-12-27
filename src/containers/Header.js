import React from 'react';
import { Title, Subtitle, Description} from '../components/commons/titles/Titles';

function Header(props) {

    const {title, country, year, director, synopsis} = props;

    return (
        <>
            <Title>{title}</Title>
            <Subtitle> {year} / {country} / {director}</Subtitle>
            <Description>{synopsis}</Description>

        </>

    );

}


export default Header;

