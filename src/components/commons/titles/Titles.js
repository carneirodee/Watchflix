import styled from "styled-components";

export const Title = styled.header`
    color: white !important;
    font-family: 'Nunito', cursive;
    font-size: 8vh;
    margin: 0vh 3vw 0 3vw;
    @media(max-width: 800px) {
        position: absolute;
        margin-top: 10vh;
        font-size: 4vh;
        line-height: 2vh;

    } 
    @media(max-width: 550px) {
        position: absolute;
    } 
`;

export const Subtitle = styled.h1`
    color: white  !important;
    font-family: 'Nunito', sans-serif;
    font-weight: lighter;
    font-size: 1.3vw;
    margin: 3vh 5vw 0 5vw;
    @media(max-width: 800px) {
        position: absolute;
        margin-top: 15vh;
        font-size: 2vh;
        line-height: 2vh;

    } 
    @media(max-width: 550px) {
        position: absolute;
        top: 5vh;
    } 
`;

export const Description = styled.p`
    font-family: 'Nunito', sans-serif;
    color: white !important;
    font-weight: lighter;
    font-size: 2.3vw;
    margin: 3vh 5vw 0 5vw;
    @media(max-width: 800px) {
        position: absolute;
        top: 10vh;
        margin-top: 20vh;
        font-size: 2vh;
        line-height: 2vh;

    } 
    @media(max-width: 550px) {
        position: absolute;
        top: 8vh;
    } 
`;

