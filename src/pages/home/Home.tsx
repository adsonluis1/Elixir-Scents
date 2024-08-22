import * as S from './Home.styled'
import Header from '../../components/header/Header'
import MaisVendidos from '../../components/maisVendidos/MaisVendidos'

const Home = () => {
  return (
    <>
        <Header />
        <S.Main>
            <MaisVendidos />
        </S.Main>
    </>

  )
}

export default Home