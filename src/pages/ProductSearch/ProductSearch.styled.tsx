import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    margin-top: 30px;
`

export const SectionProducts = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

    @media screen and (max-width: 480px){
       flex-direction: column;
       gap: 20px;
    }
`