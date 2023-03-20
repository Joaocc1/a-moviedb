import { Link } from "react-router-dom";
import styled from "styled-components";

// MovieCard component styles

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  &:hover {
    cursor: default;
    transform: scale(1.1);
  }
`;

// NavBar Component styles

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  overflow-y: auto;
  z-index: 5;
  background-color: ${(props) => props.theme.palette.background.secondary};
`; 

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary};
  &:hover, &:focus, &:active: ${(props) => props.theme.palette.text.secondary};
`
// Theme Button styles

export const Button = styled.button`
    background: none;
    border: none;
    margin: 0 20px;
    padding-right: 4rem;
`;