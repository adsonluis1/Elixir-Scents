import styled from "styled-components";

export const Div = styled.div`
    background-image: url('../../public/img/register.webp');
    background-position: center top;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    width: 50%;
    height: 100%;
    &:hover{
        width: 70%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: 50%;
        background-position: center center;

        &:hover{
            height: 70%;
            width: 110%;
        }
    }
`

export const Nav = styled.nav`
    background-color: #0000007f;
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30%;

    @media screen and (max-width: 480px){
        margin-bottom: 10%;

    }
`

export const Title = styled.h1`
    font-size: 2em;
`

export const Subtitle = styled.h2`
    font-size: 1.3em;
`

export const DivDescription = styled.div`

`

export const Description = styled.p`
    font-size: 1.3em;
`