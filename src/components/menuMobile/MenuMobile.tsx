import React from "react";
import * as S from "./MenuMobile.styled"
import { IoMdClose } from "react-icons/io";

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
            <a href="#">Chanel</a>
            <a href="#">Dior</a>
            <a href="#">Giorgio Armani</a>
            <a href="#">Yves Saint Laurent</a>
            <a href="#">Lancôme</a>
        </S.Nav>
    </S.Section>
  )
}

export default MenuMobile