import styled from "styled-components";

type TShowOrNotBag = {
    $showOrNot:boolean
}

export const CouverBag = styled.section<TShowOrNotBag>`
    position: absolute;
    background-color: #0000008f;
    cursor: pointer;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

export const DivBag = styled.div<TShowOrNotBag>`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    position: absolute;
    background-color: white;
    gap: 5px;
    z-index: 1;
    padding: 10px;
    width: 60vw;
    height: 100vh;
    top: 0;
    right: 0;

    & > .close {
        display: none;
    }

    @media screen and (max-width: 480px){
        width: 100%;

        & > .close {
        display: block;
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 1.5em;
    }
    }
`

export const TitleBag = styled.h2`
    font-size: 2em;
    margin-top: 15px;
`

export const Error = styled.p`
    font-size: 1.3em;
`

export const Loader = styled(Error)``