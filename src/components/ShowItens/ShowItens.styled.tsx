import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 45%;

    @media screen and (min-width: 800px){
       width: 25%;
    }

    @media screen and (max-width: 480px){
       width: 100%;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const DescripitionContainer = styled.div`
    
`

export const Title = styled.h2`

`

export const Price = styled.p`
    color: #000000;
`

export const DivTags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const Tag = styled.span`
    color: #5c5c5c;
    
`

export const ButtonBuy = styled.button`
    transition: .2s;
    cursor: pointer;
    border: 1px solid black;
    font-size: 1em;
    padding: 8px 16px;
    border-radius: 8px;
    margin-top: 30px;

    &:hover{
        background-color: black;
        color: white;
    }
`