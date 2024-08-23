import * as S from './NavPefumes.styled'
import { NavLink } from 'react-router-dom'

type TNavPerfumes = {
    url:"Chanel" | "Dior" | "GiorgioArmani" | "YvesSaintLaurent" | "Lancome" | undefined
}

const NavPefumes = ({url}:TNavPerfumes) => {
  return (
    <S.Nav>
        <NavLink to={`/${url}/masculino`}>Fragrancia Masculina</NavLink>
        <NavLink to={`/${url}/feminino`}>Fragrancia Feminina</NavLink>
    </S.Nav>
  )
}

export default NavPefumes