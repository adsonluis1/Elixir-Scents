import { useNavigate } from 'react-router-dom'
import * as S from './Propaganda.styled'

export type Tpropaganda = {
  title:"Chanel" | "Dior" | "Guerlain" | "Yves Saint Laurent" | "Paco Rabanne"
  sr:"Chanel" | "Dior" | "Guerlain" | "Yves Saint Laurent" | "Paco Rabanne"
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