import styled from "styled-components"

export const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    max-width: 600px;
    gap: 20px;

    @media screen and (max-width: 480px){
        margin-top: 10px;
        width: 100%;
    }
`

export const title = styled.h1`
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 5px solid black;
    width: 100%;
    font-size: 2em;

    @media screen and (max-width: 480px){
        text-align: center;
    }
`

export const Description = styled.p`
    color: #5c5c5c;

`

export const Link = styled.a`
    color: #5c5c5c;
`

export const Price = styled.p`
    padding-bottom: 15px;
    width: 100%;
    border-bottom: 1px solid #bfbfbf;
`