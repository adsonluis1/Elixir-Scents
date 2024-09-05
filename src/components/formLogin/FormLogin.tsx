import useFormLogin from '../../hooks/useFormLogin'
import * as S from './FornLogin.styled'
import { IoEnterOutline } from "react-icons/io5";

const FormLogin = () => {
  const {handleSubmit,register,errors, useLogin} = useFormLogin()

  return (
    <S.Section>
        <S.DivTitle>
          <S.Title>Bem vindo de volta</S.Title>
          <S.SubTitle>Estavamos Esperando você</S.SubTitle>
          <S.Description>Coloque as informações do seu login para entrar na sua conta</S.Description>
        </S.DivTitle>
        <S.Form onSubmit={handleSubmit(useLogin)}>
            <S.Input {...register('email')} placeholder='Digite seu Login'/>
            {errors.email &&
              <S.Error>{errors.email.message}</S.Error>
            }
            <S.Input {...register('password')} type='password' placeholder='Digite sua senha'/>
            {errors.password &&
              <S.Error>{errors.password.message}</S.Error>
            }
            <S.Button>Entrar <IoEnterOutline /></S.Button>
        </S.Form>
    </S.Section>
  )
}

export default FormLogin