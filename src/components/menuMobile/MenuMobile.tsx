import React from "react";
import * as S from "./MenuMobile.styled"
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

type MenuMobile = {
    setOpenOrCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}

const MenuMobile = ({setOpenOrCloseMenu}:MenuMobile) => {
  return (
    <S.Section>
        <S.NavClose>
            <IoMdClose onClick={()=> setOpenOrCloseMenu((prev)=> !prev)}/>
        </S.NavClose>
        <S.Nav>
            <NavLink to={'/Chanel'}>Chanel</NavLink>
            <NavLink to={'/Dior'}>Dior</NavLink>
            <NavLink to={'/GiorgioArmani'}>Giorgio Armani</NavLink>
            <NavLink to={'/YvesSaintLaurent'}>Yves Saint Laurent</NavLink>
            <NavLink to={'/Lancome'}>Lancôme</NavLink>
        </S.Nav>
    </S.Section>
  )
}

export default MenuMobile