import * as S from './ProductDescription.styled'

const ProductDescription = () => {
    {/* Receber as informações por props */}
  
    return (
    <S.DivDescription>
        <S.title>BLUE DE CHANEL</S.title>
        <S.Description>PARFUM SPRAY</S.Description>
        <S.Link href='#detalhes'>Mais detalhes</S.Link>
        <S.Price>R$ 1.320</S.Price>
    </S.DivDescription>
  )
}

export default ProductDescription