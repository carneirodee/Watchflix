import styled from "styled-components";

export const GalleryContainer = styled.article`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: start;
    align-content: start;
    align-self: start;
    justify-content: center;
    justify-items: center;
    flex-wrap: wrap;
    flex-direction: row !important;
    padding: 20px 5px 5px 5px;
    position: relative;
`;

export const GalleryItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 58vh;
    height: 100vh;
    color: gray;
    background-repeat: no-repeat;
    background-size: 58vh;
    background-position: center top;
    ${props => props.poster ? `background-image:  radial-gradient(circle closest-corner at 40% 40%, rgba(0, 0, 0, 0.2) 10%, rgba(0,0,0, 0.8)  100%), 
    url(${props.poster});` : `background-color: black`};
`;