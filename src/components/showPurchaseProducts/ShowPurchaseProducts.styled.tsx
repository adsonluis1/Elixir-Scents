import styled from "styled-components"

export const DivPurchased = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
    width: 70%;
    height: 200px;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const Date = styled.h3`
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px dashed black;
` 

export const DivContainImg = styled.div`
    width: 100%;
    height: 250px;
`

export const DivImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    overflow-x: scroll;
    padding-bottom: 5px;
    gap: 5px;
    height: 100%;

    &::-webkit-scrollbar{
        height: 5px;
    } 

    &::-webkit-scrollbar-track{
        background-color: #3f3f3f87;
    }

    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 10px;
    }
`

export const Img = styled.img`
    width: 20%;
    max-width: 100px;
`

export const DivDescription = styled.div`
    
`

export const Description = styled.p`
    font-weight: lighter;
    color: #4d4d4d;
    text-align: justify;
    font-size: 1.1em;

    & > span{
        color: black;
        font-weight: bold;
    }
`

export const Price = styled.p`
    font-weight: bold;
    margin-top: 10px;
    font-size: 1.3em;
`