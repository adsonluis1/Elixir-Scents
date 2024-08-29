import * as S from './ShowItens.styled'

type TProduct = {
    name:string
    price:number
    tags:string[]
    img:string
}

const ShowItens = ({name,price,tags,img}:TProduct) => {
  return (
    <S.Div>
        <S.Img src={img} alt={`foto do perfume ${name}`}/>
        <S.DivTags>
            {tags.map((tag)=>[
                <S.Tag>{tag}</S.Tag>
            ])}
        </S.DivTags>
        <S.Title>{name}</S.Title>
        <S.Price>R$ {price}</S.Price>
        <S.ButtonBuy>Comprar</S.ButtonBuy>
    </S.Div>
  )
}

export default ShowItens