import { useContext, useState } from "react";
import * as S from "./Header.styled"
import { FaRegUser, FaSearch, FaShoppingBag  } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import MenuMobile from "../menuMobile/MenuMobile";
import Search from "../search/Search";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom"
import Bag from "../Bag/Bag";
import { Context } from "../../context/Login";

const Header = () => {
    const [openOrCloseMenu, setOpenOrCloseMenu] = useState<boolean>(false)
    const [openOrCloseSearch,setOpenOrCloseSearch] = useState<boolean>(false)
    const [openOrCloseBag, setOpenOrCloseBag] = useState<boolean>(false)
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
    <>
        <S.Header>
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
                <NavLink to={'/Guerlain'}>Guerlain</NavLink>
                <NavLink to={'/YvesSaintLaurent'}>Yves Saint Laurent</NavLink>
                <NavLink to={'/PacoRabanne'}>Paco Rabanne</NavLink>
            </S.Nav>

            <S.NavIcons>
                <FaSearch onClick={()=> setOpenOrCloseSearch((prev)=> !prev)}/>
                {!user?.name &&
                <FaRegUser onClick={()=> navigate('/dashbordAccount')}/>
                }
                {user?.name &&
                    <>
                        <FaUserEdit onClick={()=> navigate('/perfil')}/>
                        <ImExit />
                    </> 
                }
                <FaShoppingBag onClick={()=> setOpenOrCloseBag(true)}/>
            </S.NavIcons>
        </S.Header>
        {openOrCloseMenu &&
            <MenuMobile setOpenOrCloseMenu={setOpenOrCloseMenu}/> }

        {openOrCloseSearch &&  
        <Search setOpenOrCloseSearch={setOpenOrCloseSearch}/>}
        {openOrCloseBag &&
        <Bag openOrCloseBag={openOrCloseBag} setOpenOrCloseBag={setOpenOrCloseBag}/>}
    </>
  )
}

export default Header