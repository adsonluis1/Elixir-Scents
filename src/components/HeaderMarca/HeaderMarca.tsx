import { useNavigate, useParams } from 'react-router-dom'
import * as S from './HeaderMarca.styled'
import NavPefumes from '../navPerfumes/NavPefumes'

type Tperfume = {
    marca:"Chanel" | "Dior" | "Guerlain" | "YvesSaintLaurent" | "PacoRabanne" | undefined
}

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
        <NavPefumes dark={dark} url={marca}/>
    </S.Section>
  )
}

export default HeaderMarca