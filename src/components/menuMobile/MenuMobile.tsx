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
            <NavLink onClick={()=> setOpenOrCloseMenu((prev)=> !prev)} to={'/Chanel'}>Chanel</NavLink>
            <NavLink onClick={()=> setOpenOrCloseMenu((prev)=> !prev)} to={'/Dior'}>Dior</NavLink>
            <NavLink onClick={()=> setOpenOrCloseMenu((prev)=> !prev)} to={'/Guerlain'}>Guerlain</NavLink>
            <NavLink onClick={()=> setOpenOrCloseMenu((prev)=> !prev)} to={'/YvesSaintLaurent'}>Yves Saint Laurent</NavLink>
            <NavLink onClick={()=> setOpenOrCloseMenu((prev)=> !prev)} to={'/PacoRabanne'}>Paco Rabanne</NavLink>
        </S.Nav>
    </S.Section>
  )
}

export default MenuMobile