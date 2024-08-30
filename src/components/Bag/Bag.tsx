import React from 'react'
import useDesableScroll from '../../hooks/useDesableScroll'
import * as S from './Bag.styled'
import { IoMdClose } from "react-icons/io";

type TCarrinho = {
    setOpenOrCloseBag:React.Dispatch<React.SetStateAction<boolean>>
    openOrCloseBag:boolean
}

const Bag = ({setOpenOrCloseBag, openOrCloseBag}:TCarrinho) => {
    useDesableScroll()
   
    return (
        <>
    <S.CouverBag $showOrNot={openOrCloseBag} onClick={()=> setOpenOrCloseBag(false)} />
        <S.DivBag $showOrNot={openOrCloseBag}>
            <IoMdClose onClick={()=>setOpenOrCloseBag(false)} className='close'/>
            <S.TitleBag>Sacola de compras</S.TitleBag>
            <S.DivCompra>
                <S.Img src='/img/Chanel/feminino-600x600.webp' alt='imagem perfume'/>
                <S.DivInfoProduto>
                    <S.TitleCompra>Chanel N5</S.TitleCompra>
                    <S.ProductDescription>Chanel N5 perfume - 250 ml</S.ProductDescription>
                    <S.DivInfoCompra>
                        <S.Quantidade>QTD 2</S.Quantidade>
                        <S.Price>R$ 859.00</S.Price>
                    </S.DivInfoCompra>
                </S.DivInfoProduto>
            </S.DivCompra>
        </S.DivBag>
        </>
  )
}

export default Bag