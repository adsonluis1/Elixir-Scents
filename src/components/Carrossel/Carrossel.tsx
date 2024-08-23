import { ReactNode, RefObject, useRef } from 'react'
import * as S from './Carrossel.styled'

type Tcarrossel = {
    title:string
    children:ReactNode
}

const Carrossel = ({title,children}:Tcarrossel) => {
    const element = useRef<HTMLDivElement>(null)
    const frente = (element:RefObject<HTMLDivElement>)=>{
        let padding = window.screen.width * 0.01
        element.current?.scrollBy({
            left:150 + padding,
            behavior:"smooth"
        })        
    }

    const tras = (element:RefObject<HTMLDivElement>)=>{
        let padding = window.screen.width * 0.01
        element.current?.scrollBy({
            left:-150 - padding,
            behavior:"smooth"
        })        
    }
    return (
    <>
        <S.Title>{title}</S.Title>
        <S.Section>
            <S.DivWrapper ref={element}>
                    <S.DivImg>
                        <S.ArrowBtn onClick={()=> tras(element)}$position='left' >&#10094;</S.ArrowBtn>
                            {children}
                        <S.ArrowBtn onClick={()=> frente(element)} $position='right' >&#10095;</S.ArrowBtn>
                    </S.DivImg>
            </S.DivWrapper>
        </S.Section>
    </>
  )
}

export default Carrossel