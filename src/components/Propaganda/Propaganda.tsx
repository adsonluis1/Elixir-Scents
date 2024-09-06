import { useNavigate } from 'react-router-dom'
import * as S from './Propaganda.styled'
import { TMarcas } from '../../types/Product'

export type Tpropaganda = {
  title:TMarcas
  sr:TMarcas
  reverse:boolean
}

const Propaganda = ({sr,title,reverse}:Tpropaganda) => {
  const navigate = useNavigate()
  let urlPage:string = title.replace(' ','')
  return (
    <S.DivPropaganda onClick={()=> navigate(`${urlPage}`)} $reverse={reverse}>
      <S.DivTitle $sr={sr}>
        <S.Title>{title}</S.Title>
      </S.DivTitle>
      <S.DivImg $sr={sr}/>
    </S.DivPropaganda>
  )
}

export default Propaganda