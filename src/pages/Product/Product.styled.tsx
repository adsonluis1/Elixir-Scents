import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
`

export const Section = styled.section`
    display: flex;
    gap: 10px;
    margin-top: 50px;
    padding: 10px;
    width: 100%;
    scroll-behavior: smooth;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`

export const DivRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const Loader = styled.h2`
    margin-left: 20px;
`

export const Error = styled(Loader)``