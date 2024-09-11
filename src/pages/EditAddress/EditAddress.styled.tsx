import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 100px);
    padding: 5px;
    gap: 10px;
    background-image: linear-gradient(to bottom,#030205, #073c73 35%);

    @media screen and (max-width:480px){
        flex-direction:column;
        background-image: url("../../public/img/edit-user.webp");
        background-position: center center;
    }
`

export const SectionImg = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 80%;

    @media screen and (max-width:480px){
        display: none;
    }
`

export const DivImg = styled.div`
    width: 90%;
    height: 90%;
    border: none;
    background-image: url("../../public/img/edit-user.webp");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
`