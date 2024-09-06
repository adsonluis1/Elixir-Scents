import * as S from './NavPefumes.styled'
import { NavLink } from 'react-router-dom'
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
import { useEffect, useState } from 'react';
import useCheckWidth from '../../hooks/useCheckWidth';

type TNavPerfumes = {
  marca:"Chanel" | "Dior" | "Guerlain" | "YvesSaintLaurent" | "PacoRabanne" | undefined
  dark?:boolean
}

const NavPefumes = ({marca,dark}:TNavPerfumes) => {
  const [openOrClose, setOpenOrClose] = useState<boolean>(true)
  const {screenWidth} = useCheckWidth()
  useEffect(()=>{
    setOpenOrClose(true)
  },[screenWidth])
  return (
    <S.Nav $dark={dark}>
        {openOrClose  &&
          <CiCircleChevDown title='Abri menu de navegação' onClick={()=> setOpenOrClose((prev)=> !prev)}/>
        }
        {!openOrClose &&
        <>
          <S.CoverImgs>
            <S.DivImg>
              <NavLink to={`/${marca}/masculino`}>
                      <S.Img src={`/img/${marca}/masculino-600x600.webp`}/>
              </NavLink>
              <S.Description $dark={dark}>Masculino</S.Description>
            </S.DivImg>
            <S.DivImg>
              <NavLink to={`/${marca}/feminino`}>
                <S.Img src={`/img/${marca}/feminino-600x600.webp`}/>
              </NavLink>
              <S.Description $dark={dark}>Feminino</S.Description>
            </S.DivImg>
          </S.CoverImgs>
          {!openOrClose && 
            <CiCircleChevUp title='Fechar menu de navegação' onClick={()=> setOpenOrClose((prev)=> !prev)}/>
          }
          </>
        }
    </S.Nav>
  )
}

export default NavPefumes