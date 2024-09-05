import React, {  useState } from 'react'
import * as S from './ProductImgs.styled'
import Focus from '../FocusImg/Focus'

function ProductImgs({url}:{url:string}) {
    {/* receber as informações por props */}
    const [clicked, setClicked] = useState<string>('')
    const handleClickImg = (img:React.MouseEvent<HTMLImageElement>)=>{
      if(clicked != ''){
        setClicked('')
        return
      }
      setClicked(img.currentTarget.src)
    }


    return (
    <S.DivImgs>
        {clicked &&
        <Focus>
          <S.ContainerClickedImg>
            <S.ClickekImg onClick={handleClickImg} src={clicked}/>
            </S.ContainerClickedImg>
        </Focus>
        }
        <S.Img onClick={handleClickImg} src={url}/>
    </S.DivImgs>
  )
}

export default ProductImgs