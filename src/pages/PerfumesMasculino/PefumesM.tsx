import Header from '../../components/header/Header'
import * as S from './PefumesM.styled'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'

const PefumesM = () => {
  return (
    <>
        <Header />
        <S.Main>
            <HeaderMarca dark={true}/>
            <S.Img src='/img/Chanel/propaganda-grande.webp' />
        </S.Main>
    </>
  )
}

export default PefumesM