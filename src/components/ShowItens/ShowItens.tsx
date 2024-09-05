import { NavLink, useParams } from 'react-router-dom'
import * as S from './ShowItens.styled'
import { TMarcas } from '../../pages/PerfumesSexo/PerfumesSexo'

type TProfileImage = {
  path:string
}

export type TProduct = {
    product:{
      name:string
      price:number
      tags:string[]
      profileImage:TProfileImage
      _id:number | string
    }
}

const ShowItens = ({product}:TProduct) => {
  const {marca} = useParams<TMarcas>()
  const {_id, profileImage, name, price,tags} = product
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
        <S.ButtonBuy>Comprar</S.ButtonBuy>
    </S.Div>
  )
}

export default ShowItens