import DashbordLogin from '../../components/dashbordLogin/DashbordLogin'
import DashbordRegister from '../../components/dashbordRegister/DashbordRegister'
import Header from '../../components/header/Header'
import * as S from './DashbordLoginRegister.styled'

const DashbordLoginRegister = () => {
  return (
    <>
        <Header />
        <S.Main>
        <S.Title>Login ou register</S.Title>
            <S.Section>
                <DashbordLogin />
                <DashbordRegister />
            </S.Section>
        </S.Main>
    </>
  )
}

export default DashbordLoginRegister