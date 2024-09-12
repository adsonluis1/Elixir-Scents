import React, { useContext, useState } from 'react'
import useDesableScroll from '../../hooks/useDesableScroll'
import * as S from './Bag.styled'
import {Button, DivButton} from "../bagSelectProduct/SelectProduct.styled"
import { IoMdClose } from "react-icons/io";
import { Context } from '../../context/Login';
import useGetProductsByBag from '../../hooks/useGetProductsByBag';
import BagShowProducts from '../bagShowProducts/BagShowProducts';
import { IProduct } from '../../types/Product';
import SelectProduct from '../bagSelectProduct/SelectProduct';

type TCarrinho = {
    setOpenOrCloseBag:React.Dispatch<React.SetStateAction<boolean>>
    openOrCloseBag:boolean
}

const Bag = ({setOpenOrCloseBag, openOrCloseBag}:TCarrinho) => {
    const [productSelect, setProductSelect] = useState<IProduct | null>(null)
    const {user} = useContext(Context)
    const {bag, error,load} = useGetProductsByBag(user._id)
    useDesableScroll()
    return (
        <>
            <S.CouverBag $showOrNot={openOrCloseBag} onClick={()=> setOpenOrCloseBag(false)} />
           
            <S.DivBag $showOrNot={openOrCloseBag}>
                <IoMdClose onClick={()=>setOpenOrCloseBag(false)} className='close'/>
                <S.TitleBag>Sacola de compras</S.TitleBag>
                {error && 
                    <S.Error>Erro ao carregar a sacola :(</S.Error>
                }
                {load && 
                    <S.Loader>Carregando...</S.Loader>
                }
                {bag && productSelect == null?bag.map((product)=>[    
                    <BagShowProducts productSelect={false} setSelectProduct={setProductSelect} product={product} key={product._id}/>  
                ])
                :null}
                {bag && productSelect == null?
                    <DivButton>
                        <Button $delete={false}>Finalizar compra</Button>
                        <Button $delete={true}>Limpar sacola</Button>
                    </DivButton>
                :null}
                {productSelect != null &&
                    <SelectProduct product={productSelect!} productSelect={true} setSelectProduct={setProductSelect} key={productSelect?._id}/>
                }
            </S.DivBag>
            
        </>
  )
}

export default Bag