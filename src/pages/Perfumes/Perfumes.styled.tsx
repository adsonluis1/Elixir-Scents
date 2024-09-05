import styled from "styled-components";

export const Main = styled.main`
    
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

export const Loader = styled.h2`
    margin-left: 20px;
`

export const Error = styled(Loader)``