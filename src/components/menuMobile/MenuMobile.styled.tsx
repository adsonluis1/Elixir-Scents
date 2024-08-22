import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: white;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & > *{
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.3em;
    }
`

export const NavClose = styled.nav`
    position:absolute;
    color: black;
    font-size: 1.5em;
    right: 10px;
    top: 10px;

    & > * {
        cursor: pointer;
    }
`