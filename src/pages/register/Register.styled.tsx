import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 100px);
    padding: 5px;
    gap: 10px;
    background-image: linear-gradient(to top,#068493, #051013 35%);

    @media screen and (max-width:480px){
        flex-direction:column-reverse;
        background-image: url("../../../public/img/register-mobile.webp");
        background-position: center center;
        background-size: cover;

    }
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 80%;

    @media screen and (max-width:480px){
        display: none;
        width: 100%;
    }
`

export const DivImg = styled.div`
    width: 90%;
    height: 90%;
    background-image: url("../../public/img/register.webp");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
`