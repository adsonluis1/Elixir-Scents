import { useParams } from 'react-router-dom'
import * as S from './Perfumes.styled'
import Header from '../../components/header/Header'
import NavPefumes from '../../components/navPerfumes/NavPefumes'

type Tperfume = {
    marca:"Chanel" | "Dior" | "GiorgioArmani" | "YvesSaintLaurent" | "Lancome" | undefined
}

const Perfumes = () => {
    const {marca} = useParams<Tperfume>()
    
  return (
    <>
    <Header />
    <S.Main>
        <S.Section>
            <S.DivTopMarca $marca={marca}>
                <S.Title>{marca}</S.Title>
            </S.DivTopMarca>
            <NavPefumes url={marca}/>
        </S.Section>
        <S.Section>

        </S.Section>
    </S.Main>
    </>
  )
}

export default Perfumes