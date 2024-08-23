import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    background-color: black;
    padding: 10px 20px;

    & a {
        transition: 0.2s;
        color: #7d7d7d;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.3em;
    }

    & a:hover{
        color: white;
    }
`