import FormLogin from "../../components/formLogin/FormLogin"
import Header from "../../components/header/Header"
import * as S from "./Login.styled"

const Login = () => {
  return (
    <>
        <Header />
        <S.Main>
            <S.Section>
              <S.DivImg />
            </S.Section>
            <FormLogin />
        </S.Main>
    </>
    
  )
}

export default Login