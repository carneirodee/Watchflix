import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 45vh;
    margin: 1vw;
    color: gray;
    background-repeat: no-repeat;
    background-size: 30vh;
    background-position: center top;
    ${props => props.poster ? `background-image:  radial-gradient(circle closest-corner at 40% 40%, rgba(0, 0, 0, 0.2) 10%, rgba(0,0,0, 0.8)  100%), 
    url(${props.poster});` : `background-color: black`};
`;