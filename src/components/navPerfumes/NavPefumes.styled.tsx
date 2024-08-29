import styled from "styled-components";

type Tdark = {
    $dark?:boolean
}

export const Nav = styled.nav<Tdark>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: ${({$dark})=> $dark?'black':'white'};
    
    padding: 10px 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

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

    & svg{
        cursor: pointer;
        display: block;
        color: ${({$dark})=> $dark?'white':'black'};
        font-size: 2em;
    }
    
`

export const CoverImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 10px;
`

export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:45%;
    max-width: 300px;
    min-width: 120px;
`

export const Img = styled.img`
    width: 100%;
`

export const Description = styled.p<Tdark>`
    color: ${({$dark})=> $dark?'white':'black'};
    cursor: default;
    font-size: 1.3em;
    font-weight: bold;
`