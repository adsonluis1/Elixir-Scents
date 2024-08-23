import styled, { css } from "styled-components";

type Tpropaganda = {
    $sr:"Chanel" | "Dior" | "Giorgio Armani" | "Yves Saint Laurent" | "Lancome"
}

type TDivPropaganda = {
    $reverse:boolean
}

export const DivPropaganda = styled.div<TDivPropaganda>`
    display: flex;
    flex-direction: ${({$reverse})=> $reverse?"row-reverse":"row"};
    align-items: center;
    justify-content: space-between;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    cursor: pointer;
    width: 100vw; 
    height: 30vh;

    @media screen and (max-width: 480px){
        height: 25vh;
    }
`

export const DivImg = styled.div<Tpropaganda>`
    background-size:cover;
    background-position:center;
    width: 40%;
    height: 100%;
    ${({$sr})=>
        $sr=="Chanel"?            
        css`
                background-image: url('/img/chanel/propaganda-chanel.jpg');
            `
        :
        $sr=="Dior"?    
        css`
                background-image: url('/img/dior/propaganda-dior.jpg');
           `        
        : 
        $sr=="Giorgio Armani"?    
        css`
                background-image: url('/img/armani/propaganda-armani.jpg');
           `        
        : 
        $sr == "Yves Saint Laurent"?
        css`
            background-image: url('/img/laurent/propaganda-laurent.jpg');
        `
        :
        $sr == "Lancome"?
        css`
           background-image: url('/img/lancome/propaganda-lancome.jpg');
        `
        :""

    }

    @media screen and (max-width: 480px){
        width: 70%;
        background-size:cover;
        background-position:center;
    }
   
`

export const DivTitle = styled.div<Tpropaganda>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;

    ${({$sr})=>
        $sr=="Chanel"?            
        css`
               background-color: white;
               color: black;
            `
        :
        $sr=="Dior"?    
        css`
                background-color: #1f466b;
                color: white;
           `        
        : 
        $sr=="Giorgio Armani"?    
        css`
               background-color: #090909;
               color: white;
           `        
        :
        $sr == "Yves Saint Laurent"?
        css`
            background-color: #ccdae9;
            color: black;
        `
        :
        $sr == "Lancome"?
        css`
            background-color: white;
            color: #ff908a;
        `
        :""

    }
`

export const Title = styled.h2`
    font-size: clamp(1.3em, 5vw, 2.2em);
`