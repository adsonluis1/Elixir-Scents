import * as S from './ProductMaisDetalhes.styled'

type TProductMaisDetalhes = {
    description:string
    aroma:string
}

const ProductMaisDetalhes = ({description,aroma}:TProductMaisDetalhes) => {
  return (
    <S.AsideContainer>
        <S.DivDescription>
            <S.SubTitle>Description</S.SubTitle>
            <S.Text>{description}</S.Text>
        </S.DivDescription>
        <S.DivAroma>
            <S.SubTitle>Aroma</S.SubTitle>
            <S.Text>{aroma}</S.Text>
        </S.DivAroma>
    </S.AsideContainer>
  )
}

export default ProductMaisDetalhes