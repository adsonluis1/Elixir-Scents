import { useNavigate } from 'react-router-dom'
import * as S from './DashbordLogin.styled'

const DashbordLogin = () => {
  const navigate = useNavigate()
  return (
    <S.Div>
        <S.Nav onClick={()=> navigate('/login')}>
            <S.DivTitle>
                <S.Title>Login</S.Title>
                <S.Subtitle>Já possui cadastro ?</S.Subtitle>
            </S.DivTitle>
            <S.DivDescription>
                <S.Description>Clique aqui para ser direcioando para a página de login</S.Description>
            </S.DivDescription>
        </S.Nav>
    </S.Div>
  )
}

export default DashbordLogin