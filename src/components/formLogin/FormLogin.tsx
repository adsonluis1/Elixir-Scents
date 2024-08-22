import useLogin from '../../hooks/useLogin'
import * as S from './FornLogin.styled'
import { IoEnterOutline } from "react-icons/io5";

const FormLogin = () => {
  const {handleSubmit,handleSubmitData,register,errors} = useLogin()
  
  return (
    <S.Section>
        <S.DivTitle>
          <S.Title>Bem vindo de volta</S.Title>
          <S.SubTitle>Estavamos Esperando você</S.SubTitle>
          <S.Description>Coloque as informações do seu login para entrar na sua conta</S.Description>
        </S.DivTitle>
        <S.Form onSubmit={handleSubmit(handleSubmitData)}>
            <S.Input {...register('login')} placeholder='Digite seu Login'/>
            {errors.login &&
              <S.Error>{errors.login.message}</S.Error>
            }
            <S.Input {...register('senha')} type='password' placeholder='Digite sua senha'/>
            {errors.senha &&
              <S.Error>{errors.senha.message}</S.Error>
            }
            <S.Button>Entrar <IoEnterOutline /></S.Button>
        </S.Form>
    </S.Section>
  )
}

export default FormLogin