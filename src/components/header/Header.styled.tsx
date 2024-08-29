import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 10px;
    height: 100px;
    width: 100vw;
`

export const Div = styled.div`
    display: flex;
    gap: 10px;
    width: auto;
`

export const Title = styled.h1`
    cursor: pointer;
    font-size: 1.5em;
    color: white;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 60%;

    & a {
        color: #adadad;
        text-decoration: none;
    }

    & a:hover{
        color: white;
    }

    @media screen and (max-width: 765px) {
        display: none;
    }
`

export const NavIcons = styled.nav`
    display: flex;
    align-items: center;
    justify-content: end;
    color: white;

    gap: 20px;
    width: clamp(80px 15% 300px);

    & > * {
        cursor: pointer;
    }
`

export const DivMenuMobile = styled.div`
    display: none;
    color: white;
    @media screen and (max-width: 765px) {
        display: flex;
        align-items: center;
        & > * {
            font-size: 1.5em;
        }
    }
`