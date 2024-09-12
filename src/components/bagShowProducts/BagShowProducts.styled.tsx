import styled from "styled-components"

export const DivCompra = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    width: 330px;
    height: 120px;

    & > .menu{
        cursor: pointer;
        position: relative;
        top: -25px;
        margin-left: 10px;
        font-size: 1.5em;
    }
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