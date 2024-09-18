import styled from "styled-components";

export const Section = styled.section`
    background-color: white;
    color: black;
    position: absolute;
    overflow: hidden;
    z-index: 1;
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

export const DivContainImg = styled.div`
    width: 100%;
    height: 400px;
`

export const DivImgs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow-y: scroll;
    padding-bottom: 5px;
    gap: 5px;
    height: 100%;

    &::-webkit-scrollbar{
        height: 5px;
    } 

    &::-webkit-scrollbar-track{
        background-color: #3f3f3f87;
    }

    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 10px;
    }

    & > img{
        width: 20%;
    }
`