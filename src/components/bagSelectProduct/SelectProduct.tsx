import * as S from './SelectProduct.styled'
import { IProduct } from '../../types/Product'
import BagShowProducts from '../bagShowProducts/BagShowProducts'
import { SetStateAction, useContext } from 'react'
import { Context } from '../../context/Login'
import { handleClickSelectProductClearBag, handleClickSelectProductFinishBuy } from '../../utils/functions'

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
          <S.Button onClick={()=> handleClickSelectProductFinishBuy(product._id,product.label,user,product.amount,setSelectProduct)} $delete={false}>Finalizar compra do item</S.Button>
          <S.Button onClick={()=> handleClickSelectProductClearBag(product._id,user,setSelectProduct)}$delete={true}>Tirar item da sacola</S.Button>
        </S.DivButton>
    </S.Section>
  )
}

export default SelectProduct