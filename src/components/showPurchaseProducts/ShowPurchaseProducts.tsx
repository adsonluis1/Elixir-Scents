import { IProductPurchase } from '../../types/Product'
import * as S from './ShowPurchaseProducts.styled'

type TShowPurchaseProducts = {
    previousPurchases:IProductPurchase
}

const ShowPurchaseProducts = ({previousPurchases}:TShowPurchaseProducts) => {
    let initialValue= 0
    return(
    <S.DivPurchased>
              <S.Date>{previousPurchases.datePurchase}</S.Date>
              <S.DivContainImg>
                <S.DivImgs>
                {previousPurchases.products.map((product)=>[
                    <S.Img src={product.profileImage.path} alt={`img do perfume ${product.name}`}/>
                ])}
                </S.DivImgs>
            </S.DivContainImg>

              <S.DivDescription>
                <S.Description><span>Produtos:</span> {previousPurchases.products.map((product)=> product.name).join(', ')}</S.Description>
                <S.Price>R${previousPurchases.products.map((products=> products.price)).reduce((accumulator, currentValue) => accumulator + currentValue,initialValue,)}</S.Price>
              </S.DivDescription>
    </S.DivPurchased>
  )
}

export default ShowPurchaseProducts