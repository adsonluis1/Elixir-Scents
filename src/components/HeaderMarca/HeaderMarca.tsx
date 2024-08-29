import { useParams } from 'react-router-dom'
import * as S from './HeaderMarca.styled'
import NavPefumes from '../navPerfumes/NavPefumes'

type Tperfume = {
    marca:"Chanel" | "Dior" | "GiorgioArmani" | "YvesSaintLaurent" | "PacoRabanne" | undefined
}

type THeaderMarca = {
    dark:boolean
}

const HeaderMarca = ({dark}:THeaderMarca) => {
    const {marca} = useParams<Tperfume>()
    
    return (
    <S.Section>
        <S.DivTopMarca>
            <S.Title>{marca?.replace(/([A-Z])/g, ' $1')}</S.Title>
        </S.DivTopMarca>
        <NavPefumes dark={dark} url={marca}/>
    </S.Section>
  )
}

export default HeaderMarca