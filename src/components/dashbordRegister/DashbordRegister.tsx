import { useNavigate } from 'react-router-dom'
import * as S from './DashbordRegister.styled'

const DashbordRegister = () => {
  const navigate = useNavigate()
    return (
    <S.Div>
        <S.Nav onClick={()=> navigate('/register')}>
            <S.DivTitle>
                <S.Title>Register</S.Title>
                <S.Subtitle>Ainda não possui cadastro ?</S.Subtitle>
            </S.DivTitle>
            <S.DivDescription>
                <S.Description>Clique aqui para ser direcioando para a página de cadastro</S.Description>
            </S.DivDescription>
        </S.Nav>
    </S.Div>
  )
}

export default DashbordRegister