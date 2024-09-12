import styled, { css } from "styled-components";

type TButton = {
    $delete:boolean
}

export const Section = styled.section`
    
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`

export const Button = styled.button<TButton>`
    font-weight: bold;
    width: 50%;
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;

    ${({$delete})=> $delete == false?
        css`
            &:hover {
                color: green;
                border: 1px solid green;
                box-shadow: 1px 1px 10px green;
            }
        `
    :
        css`
             &:hover {
                color: red;
                border: 1px solid red;
                box-shadow: 1px 1px 10px red;
            }
        `    
}
`