import { IProduct } from '../../types/Product'
import { IoMdMore } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";

import * as S from './BagShowProducts.styled'
import React, { SetStateAction } from 'react';

type TBagShowProducts = {
    product:IProduct
    setSelectProduct:React.Dispatch<SetStateAction<IProduct | null>>
    productSelect:boolean
}

const BagShowProducts = ({product,setSelectProduct,productSelect}:TBagShowProducts) => {
  return (
    <S.DivCompra key={product._id}>
        <S.Img src={product.profileImage.path} alt='imagem perfume'/>
        <S.DivInfoProduto>
            <S.TitleCompra>{product.name}</S.TitleCompra>
            <S.ProductDescription>{product.tags.join(', ')}</S.ProductDescription>
            <S.DivInfoCompra>
                <S.Quantidade title='Quantidade'>QTD {product.amount}</S.Quantidade>
                <S.Price>R$ {product.amount * product.price}</S.Price>
            </S.DivInfoCompra>
        </S.DivInfoProduto>
        {productSelect == false &&
        <IoMdMore title='Menu' onClick={()=>setSelectProduct!(product)} className='menu'/>
        }
        {productSelect == true &&
        <TiArrowBack title='Voltar' onClick={()=>setSelectProduct!(null)} className='menu'/>
        }
    </S.DivCompra>
  )
}

export default BagShowProducts