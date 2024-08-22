import FormRegister from "../../components/formRegister/FormRegister"
import Header from "../../components/header/Header"
import * as S from './Register.styled'

const Register = () => {
  return (
    <>
    <Header />
    <S.Main>
        <S.Section>
            <S.DivImg/>
        </S.Section>
        <FormRegister />
    </S.Main>
    </>
  )
}

export default Register