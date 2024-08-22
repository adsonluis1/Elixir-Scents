import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: 80%;
    color: white;
    width: 50%;
    padding: 5px;

    @media screen and (max-width:480px){
        width: 100%;
    }
`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    gap: 10px;
    height: 50%;
`

export const Title = styled.h1`
    font-size: clamp(2em, 4vw, 4em);
`

export const SubTitle = styled.h2`
    font-size: clamp(1.3em, 3.5vw, 3.5em);
`

export const Description = styled.p`
    color: #505050;
    text-align: center;
    margin-top: 10px;
    font-size: 1.2em;

    @media screen and (max-width:480px){
        color: #858585;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    gap: 20px;
`

export const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid grey;
    width: clamp(200px, 80%, 400px);
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    font-size: 1.3em;
    transition: .2s;
    gap: 3px;
    padding:8px 16px;
    border-radius: 8px;

    &:hover{
        background-color: white;
        color: black;
    }
`

export const Error = styled.p`
    color: red;
    text-align: center;
    font-size: 0.9em;
`