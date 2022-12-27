
import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-self: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90vw;
    height: 30vh;
    position: absolute;
    bottom: 0em;    
    padding: 0 0 0 8vh;
    flex-wrap: wrap;
    @media(max-width: 800px) {
        width: auto;
        padding: 0 0 0 5vw;
      }
      @media(max-width: 450px) {
        padding: 0 0 0 5vw;

      }
`;

export default FooterContainer;