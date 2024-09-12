import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { IUser } from '../../types/User'
import * as S from './ClientPerfil.styled'

const ClientPerfil = ({user}:{user:IUser}) => {
    const navigate = useNavigate()
  
    return (
    <>
        <Header />
        <S.Main>
            <S.Section>
                <S.DivTitle>
                    <S.Title>Ola, {user.name}.</S.Title>
                    <S.Description>Aqui voce pode ver e editar as informações da sua conta.</S.Description>
                </S.DivTitle>
                <S.DivInfoContainer>
                    <S.Info onClick={()=> navigate('editarEndereco')}>
                        <S.TitleInfo>Editar endereço</S.TitleInfo>
                        <S.Img src="/img/editar-endereço.png"/>
                    </S.Info>
                    <S.Info>
                        <S.TitleInfo>Historico de compra</S.TitleInfo>
                        <S.Img src='/img/historico-compra.png'/>
                    </S.Info>
                </S.DivInfoContainer>
            </S.Section>
        </S.Main>
    </>
  )
}

export default ClientPerfil