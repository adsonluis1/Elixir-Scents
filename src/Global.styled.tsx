import {createGlobalStyle} from "styled-components"


export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    html{
        overflow-x: hidden;
        background-color: white;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar{
        display: none;
        }
    }
`