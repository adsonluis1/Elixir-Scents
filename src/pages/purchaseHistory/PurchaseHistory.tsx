import * as S from './PurchaseHistory.styled'
import { IUser } from '../../types/User'
import Header from '../../components/header/Header'
import useGetPurchaseHistory from '../../hooks/useGetPurchaseHistory'
import ShowPurchaseProducts from '../../components/showPurchaseProducts/ShowPurchaseProducts'

const PurchaseHistory = ({user}:{user:IUser}) => {
  const {products, load, error} = useGetPurchaseHistory(user._id)
  console.log(error)
  console.log(load)
  return (  
    <>
        <Header />
        <S.Main>
          <S.Section>
            <S.Title>Historico de compras</S.Title>
            {products.length > 0 &&
              products.map((product)=>[
                <ShowPurchaseProducts key={product.datePurchase} previousPurchases={product}/>
              ])
            }
          </S.Section>
        </S.Main>
    </>
  )
}

export default PurchaseHistory