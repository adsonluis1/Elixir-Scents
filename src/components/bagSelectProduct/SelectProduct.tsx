import * as S from './SelectProduct.styled'
import { IProduct } from '../../types/Product'
import BagShowProducts from '../bagShowProducts/BagShowProducts'
import { SetStateAction, useContext } from 'react'
import useFinalizePurchase from '../../hooks/useFinalizePurchase'
import { Context } from '../../context/Login'

type TSelectProduct = {
    product:IProduct
    setSelectProduct:React.Dispatch<SetStateAction<IProduct | null>>
    productSelect:boolean
}

const SelectProduct = ({product,productSelect,setSelectProduct}:TSelectProduct) => {
  const {user} = useContext(Context)
  
  return (
    <S.Section>
        <BagShowProducts productSelect={productSelect} setSelectProduct={setSelectProduct} product={product}/>
        <S.DivButton>
          <S.Button onClick={()=> useFinalizePurchase(product._id,product.name,user,product.amount)} $delete={false}>Finalizar compra do item</S.Button>
          <S.Button $delete={true}>Tirar item da sacola</S.Button>
        </S.DivButton>
    </S.Section>
  )
}

export default SelectProduct