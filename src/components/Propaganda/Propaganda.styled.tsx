import styled, { css } from "styled-components";

type Tpropaganda = {
    $sr:"Chanel" | "Dior" | "Guerlain" | "Yves Saint Laurent" | "Paco Rabanne"
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
                background-image: url('/img/Chanel/propaganda-chanel.jpg');
            `
        :
        $sr=="Dior"?    
        css`
                background-image: url('/img/Dior/propaganda-dior.jpg');
           `        
        : 
        $sr=="Guerlain"?    
        css`
                background-image: url('/img/Guerlain/propaganda-guerlain.jpg');
           `        
        : 
        $sr == "Yves Saint Laurent"?
        css`
            background-image: url('/img/YvesSaintLaurent/propaganda-laurent.jpg');
        `
        :
        $sr == "Paco Rabanne"?
        css`
           background-image: url('/img/PacoRabanne/propaganda-PacoRabanne.png');
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
               background-color: #f8a61d;
               color: white;
            `
        :
        $sr=="Dior"?    
        css`
                background-color: #1f466b;
                color: white;
           `        
        : 
        $sr=="Guerlain"?    
        css`
               background-color: #1f4a41;
               color: white;
           `        
        :
        $sr == "Yves Saint Laurent"?
        css`
            background-color: #ccdae9;
            color: black;
        `
        :
        $sr == "Paco Rabanne"?
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