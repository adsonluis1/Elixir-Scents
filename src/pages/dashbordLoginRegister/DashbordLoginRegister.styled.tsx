import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to left, #068493, #051013 60%);
    color: white;
    gap: 30px;
    width: 100vw;
    height: calc(100vh - 100px);

    @media screen and (max-width: 480px){
        background-image: linear-gradient(to top, #068493, #051013 60%);
    }

`

export const Title = styled.h1`
    font-size: 2em;
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    gap: 10px;
    padding: 20px;
    width: clamp(360px, 90%, 600px);
    height: clamp(350px, 80%,500px);

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`