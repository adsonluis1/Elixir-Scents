import styled from "styled-components";

export const Main = styled.main`
    height: calc(100vh - 100px);
    width: 100vw;
`

export const Section = styled.section`
    
`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin:20px 0px 0px 20px;
`

export const Title = styled.h1`
    
`

export const Description = styled.p`
    color: #494949;
    font-size: 1.3em;
`

export const DivInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    padding: 10px;
    gap: 15px;
    margin-top: 30px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    cursor: pointer;
    width: clamp(200px, 30%, 250px);
    height: 250px;
`

export const TitleInfo = styled.h3`
    font-weight: normal;
    margin-bottom: 10px;
`

export const Img = styled.img`
    width: 95%;
`
