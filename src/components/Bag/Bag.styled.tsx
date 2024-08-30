import styled from "styled-components";

type TShowOrNotBag = {
    $showOrNot:boolean
}

export const CouverBag = styled.section<TShowOrNotBag>`
    position: absolute;
    background-color: #0000008f;
    cursor: pointer;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

export const DivBag = styled.div<TShowOrNotBag>`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    position: absolute;
    background-color: white;
    z-index: 1;
    padding: 10px;
    width: 60vw;
    height: 100vh;
    top: 0;
    right: 0;

    & > .close {
        display: none;
    }

    @media screen and (max-width: 480px){
        width: 100%;

        & > .close {
        display: block;
        position: absolute;
        right: 10px;
        font-size: 1.5em;
    }
    }
`

export const TitleBag = styled.h2`
    font-size: 2em;
    margin: 50px 0px;
`

export const DivCompra = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 120px;
`


export const Img = styled.img`
    height: 100%;
`
export const DivInfoProduto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TitleCompra = styled.p`
    font-size: 1.2em;
    font-weight: bold;
`

export const ProductDescription = styled.p`
    color: #505050;
`

export const DivInfoCompra = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Quantidade = styled.p`
    color: #505050;
`

export const Price = styled.p`
    font-weight: bold;
`

export const Button = styled.button`
    
`