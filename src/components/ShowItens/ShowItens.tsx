import { NavLink, useNavigate, useParams } from 'react-router-dom'
import * as S from './ShowItens.styled'
import { TMarcas } from '../../pages/PerfumesSexo/PerfumesSexo'
import { useContext, useEffect, useState} from 'react'
import { Context } from '../../context/Login'
import { IProduct } from '../../types/Product'
import { handleClickBuyButton } from '../../utils/functions'

export type TProduct = {
    product:IProduct
}

const ShowItens = ({product}:TProduct) => {
  const {marca} = useParams<TMarcas>()
  const {user} = useContext(Context)
  const [done, setDone] = useState(false)
  const {_id, profileImage, name, price,tags} = product
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(done == true){
      console.log('add ao carrinho')
      setDone(false)
    }

    return ()=> setDone(false)
  },[done])
  
  return (
    <S.Div>
        <NavLink to={`/${marca}/${_id}`}>
          <S.Img src={profileImage.path} alt={`foto do perfume ${name}`}/>
        </NavLink>
        <S.DivTags>
            {tags.map((tag)=>[
                <S.Tag>#{tag}</S.Tag>
            ])}
        </S.DivTags>
        <S.Title>{name}</S.Title>
        <S.Price>R$ {price}</S.Price>
        <S.ButtonBuy onClick={()=> handleClickBuyButton(user,product,navigate,setDone)}>Comprar</S.ButtonBuy>
    </S.Div>
  )
}

export default ShowItens