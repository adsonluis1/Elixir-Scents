import * as S from './ProductDescription.styled'

type TProductDescription = {
  tags:string[],
  name:string,
  price:number
}

const ProductDescription = ({tags,name,price}:TProductDescription) => {
    return (
    <S.DivDescription>
        <S.title>{name.toLocaleUpperCase()}</S.title>
        <S.Description>{tags.join(', ')}</S.Description>
        <S.Link href='#detalhes'>Mais detalhes</S.Link>
        <S.Price>R$ {price}</S.Price>
    </S.DivDescription>
  )
}

export default ProductDescription