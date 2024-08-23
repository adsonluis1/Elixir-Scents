import styled, { css } from "styled-components";

export const Main = styled.main`
    
`

export const Section = styled.section`
    
`

type TDivTopMarca = {
    $marca:"Chanel" | "Dior" | "GiorgioArmani" | "YvesSaintLaurent" | "Lancome" | undefined
}

export const DivTopMarca = styled.div<TDivTopMarca>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    background-color: black;
    ${({$marca})=> 
        $marca == "Chanel"?
        css`
            
        `
        :
        $marca == "Dior"?
        css`
            
        `
        :
        $marca == "GiorgioArmani"?
        css`
            
        `
        :
        $marca == "Lancome"?
        css`
            
        `
        :
        $marca == "YvesSaintLaurent"?
        css`
            
        `
        :""
    }
`

export const Title = styled.h1`
    color: white;
    font-size: 3em;
`