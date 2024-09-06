import { useNavigate, useParams } from 'react-router-dom'
import * as S from './HeaderMarca.styled'
import NavPefumes from '../navPerfumes/NavPefumes'
import { Tperfume } from '../../types/Product'

type THeaderMarca = {
    dark:boolean
}

const HeaderMarca = ({dark}:THeaderMarca) => {
    const {marca} = useParams<Tperfume>()
    const navigate = useNavigate()
    return (
    <S.Section>
        <S.DivTopMarca>
            <S.Title onClick={()=> navigate(`/${marca}`)}>{marca?.replace(/([A-Z])/g, ' $1')}</S.Title>
        </S.DivTopMarca>
        <NavPefumes dark={dark} marca={marca}/>
    </S.Section>
  )
}

export default HeaderMarca