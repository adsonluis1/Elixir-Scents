import styled from "styled-components";

export const Section = styled.section`
    background-color: white;
    color: black;
    position: absolute;
    top: 100px;
    left: 0;
    height: calc(100vh - 100px);
    width: 100vw;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 50%;
`

export const DivForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const DivError = styled(DivForm)``

export const Input = styled.input`
    border: none;
    margin: 5%;
    width: 90%;
    padding: 4px 7px;
    border-bottom: 1px solid grey;
    
    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 4px 7px;
    border-radius: 3px;
`

export const Error = styled.p`
    color: red;
    font-size: 0.9em;
`