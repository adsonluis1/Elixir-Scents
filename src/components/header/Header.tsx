import { useState } from "react";
import * as S from "./Header.styled"
import { FaRegUser, FaSearch, FaShoppingBag  } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import MenuMobile from "../menuMobile/MenuMobile";
import Search from "../search/Search";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom"

const Header = () => {
    const [openOrCloseMenu, setOpenOrCloseMenu] = useState<boolean>(false)
    const [openOrCloseSearch,setOpenOrCloseSearch] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
    <S.Header>
        {openOrCloseMenu &&
            <MenuMobile setOpenOrCloseMenu={setOpenOrCloseMenu}/> }

        {openOrCloseSearch &&  
            <Search setOpenOrCloseSearch={setOpenOrCloseSearch}/>}
        
        <S.Div>
            <S.DivMenuMobile>
                {!openOrCloseSearch &&
                    <IoMdMenu onClick={()=> setOpenOrCloseMenu((prev)=> !prev)}/>}
            </S.DivMenuMobile>
            <S.Title onClick={()=> navigate('/')}>Elixir Scents</S.Title>
        </S.Div>
        <S.Nav>
            <NavLink to={'/Chanel'}>Chanel</NavLink>
            <NavLink to={'/Dior'}>Dior</NavLink>
            <NavLink to={'/GiorgioArmani'}>Giorgio Armani</NavLink>
            <NavLink to={'/YvesSaintLaurent'}>Yves Saint Laurent</NavLink>
            <NavLink to={'/PacoRabanne'}>Paco Rabanne</NavLink>
        </S.Nav>

        <S.NavIcons>
            <FaSearch onClick={()=> setOpenOrCloseSearch((prev)=> !prev)}/>
            <FaRegUser onClick={()=> navigate('/dashbordAccount')}/>
            <FaShoppingBag />
        </S.NavIcons>
    </S.Header>
  )
}

export default Header