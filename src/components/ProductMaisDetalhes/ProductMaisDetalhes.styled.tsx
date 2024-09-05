import styled from "styled-components";

export const AsideContainer = styled.aside`
    
`

export const SubTitle = styled.h3`
    font-size: 1.5em;
`

export const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`

export const DivAroma = styled(DivDescription)``

export const Text = styled.p`
    text-align: justify;
    text-indent: 15px;

    @media screen and (min-width: 800px){
        font-size: 1.3em;
    }
`
