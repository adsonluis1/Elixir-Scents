import { NavLink, useParams } from 'react-router-dom'
import * as S from './ShowItens.styled'
import { TMarcas } from '../../pages/PerfumesSexo/PerfumesSexo'

type TProduct = {
    product:{
      name:string
      price:number
      tags:string[]
      img:string
      id:number | string
    }
}

const ShowItens = ({product}:TProduct) => {
  const {marca} = useParams<TMarcas>()
  const {id, img, name, price,tags} = product
  return (
    <S.Div>
        <NavLink to={`/${marca}/${id}`}>
          <S.Img src={img} alt={`foto do perfume ${name}`}/>
        </NavLink>
        <S.DivTags>
            {tags.map((tag)=>[
                <S.Tag>{tag}</S.Tag>
            ])}
        </S.DivTags>
        <S.Title>{name}</S.Title>
        <S.Price>R$ {price}</S.Price>
        <S.ButtonBuy>Comprar</S.ButtonBuy>
    </S.Div>
  )
}

export default ShowItens