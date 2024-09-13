import React, { useContext, useEffect, useState } from 'react'
import useDesableScroll from '../../hooks/useDesableScroll'
import * as S from './Bag.styled'
import {Button, DivButton} from "../bagSelectProduct/SelectProduct.styled"
import { IoMdClose } from "react-icons/io";
import { Context } from '../../context/Login';
import useGetProductsByBag from '../../hooks/useGetProductsByBag';
import BagShowProducts from '../bagShowProducts/BagShowProducts';
import { IProduct } from '../../types/Product';
import SelectProduct from '../bagSelectProduct/SelectProduct';
import { handleClickProductClearBag, handleClickProductFinishBuy } from '../../utils/functions';

type TCarrinho = {
    setOpenOrCloseBag:React.Dispatch<React.SetStateAction<boolean>>
    openOrCloseBag:boolean
}

const Bag = ({setOpenOrCloseBag, openOrCloseBag}:TCarrinho) => {
    const [productSelect, setProductSelect] = useState<IProduct | null>(null)
    const {user} = useContext(Context)
    const {bag, error,load,setBag} = useGetProductsByBag(user._id)

    useEffect(()=>{
        if(productSelect)
            setBag((prev)=> prev.filter((product)=> product != productSelect))
    },[productSelect])
   
    useDesableScroll()
    return (
        <>
            <S.CouverBag $showOrNot={openOrCloseBag} onClick={()=> setOpenOrCloseBag(false)} />
           
            <S.DivBag $showOrNot={openOrCloseBag}>
                <IoMdClose onClick={()=>setOpenOrCloseBag(false)} className='close'/>
                <S.TitleBag>Sacola de compras</S.TitleBag>
                {!user.name && 
                    <S.Information>Nenhum item no salacola</S.Information>
                }
                {error && user.name && !load? 
                    <S.Error>Erro ao carregar a sacola :(</S.Error>:null
                }
                {load && user.name && !error?
                    <S.Loader>Carregando...</S.Loader>:null
                }
                {bag?.length > 0 && productSelect == null?bag.map((product)=>[    
                    <BagShowProducts productSelect={false} setSelectProduct={setProductSelect} product={product} key={product._id}/>  
                ])
                :null}
                {bag?.length > 0 && productSelect == null?
                    <DivButton>
                        <Button onClick={()=> handleClickProductFinishBuy(bag,user,setBag)} $delete={false}>Finalizar compra</Button>
                        <Button onClick= {()=> handleClickProductClearBag(bag,user,setBag) }$delete={true}>Limpar sacola</Button>
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