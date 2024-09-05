import styled from "styled-components"

export const DivImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const Img = styled.img`
    cursor: pointer;
    width: 100%;
    max-width: 400px;
`

export const ContainerClickedImg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff69;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const ClickekImg = styled.img`
    cursor: pointer;
    height: 90vh;
`