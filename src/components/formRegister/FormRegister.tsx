import useRegister from '../../hooks/useRegister'
import * as S from '../formLogin/FornLogin.styled'
import {IoEnterOutline} from 'react-icons/io5'
const FormRegister = () => {
    const {handleSubmit,handleSubmitData,register,errors} = useRegister()
  
    return (
    <S.Section>
        <S.DivTitle>
            <S.Title>Bem vindo</S.Title>
            <S.SubTitle>É um prazer ter você aqui</S.SubTitle>
            <S.Description>Crie informações do seu login para criar sua conta</S.Description>
        </S.DivTitle>
        <S.Form onSubmit={handleSubmit(handleSubmitData)}>
            <S.Input {...register('login')} placeholder='Digite um Login'/>
            {errors.login &&
            <S.Error>{errors.login.message}</S.Error>
            }
            <S.Input {...register('email')} type='email' placeholder='Digite seu Email'/>
            {errors.email &&
            <S.Error>{errors.email.message}</S.Error>
            }
            <S.Input {...register('senha')} type='password' placeholder='Digite sua senha'/>
            {errors.senha &&
            <S.Error>{errors.senha.message}</S.Error>
            }
             <S.Input {...register('confirmSenha')} type='password' placeholder='Confirme sua senha'/>
            {errors.confirmSenha &&
            <S.Error>{errors.confirmSenha.message}</S.Error>
            }
            <S.Button>Registrar <IoEnterOutline /></S.Button>
        </S.Form>
    </S.Section>
  )
}

export default FormRegister