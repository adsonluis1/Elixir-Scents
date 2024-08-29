import styled, { css } from "styled-components";

export const Section = styled.section`
    width: 100vw;
    padding: 10px 0px;
`

export const Title = styled.h2`
    margin:20px;
`

export const DivWrapper = styled.div`
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
        display: none;
    }
`

export const DivImg = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
    height: 100%;
    gap: 1vw;
    flex-flow:row nowrap;
`

type ArrowBtn = {
    $position:"left" | "right"
}

export const ArrowBtn = styled.div<ArrowBtn>`
    transition: 0.2s;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: white;
    ${({$position})=> $position == "left"?
        css`
            left: 0px;
            border-radius: 0px 8px 8px 0px;
        `     
        :
        css`
            right: 0px;
            border-radius: 8px 0px 0px 8px;

        `
    }
    background-color: #00000045;
    height: 150px;
    width: 15px;

    &:hover{
        background-color:#0000009d;
        width: 30px;
    }
`