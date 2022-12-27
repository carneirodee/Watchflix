import styled from "styled-components";

export const Iframe = styled.iframe`
font-family: 'Nunito', sans-serif;
color: white !important;
font-weight: lighter;
font-size: 2.3vw;
margin: 3vh 5vw 5vh 5vw;
width: 50vw;
height: 40vh;
@media(max-width: 800px) {
    font-size: 2vh;
    line-height: 2vh;
    margin-top: 20vh;
    margin-bottom: 5vh;
    width: 70vw;
    height: 60vh;
} 
@media(max-width: 550px) {
    position: absolute;
    margin-bottom: 5vh;
    top: 30vh;
    width: 70vw;
    height: 60vh;
} 
    `