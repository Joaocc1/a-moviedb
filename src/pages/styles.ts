import styled from "styled-components";
import banner from "../assets/noom-peerapong-2uwFEAGUm6E-unsplash.jpg";

export const Header = styled.div`
  margin-bottom: 4rem;
  padding: 2.5rem;
  text-align: center;
  color: ${(props) => props.theme.palette.text.primary};
  background-image: url(${banner});
  background-color: ${(props) => props.theme.palette.background.terciary};
  background-position: center;
`;

export const HeaderOne = styled.h1`
margin: 0 auto;
width: 40vw;
padding: .5rem;
background-color: ${(props) => props.theme.palette.background.terciary};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem 4rem;
`;
