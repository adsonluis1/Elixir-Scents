import * as S from './ProductOptions.styled'

const ProductOptions = () => {
  return (
    <S.DivOptions>
        <S.Label>
            <S.Options name='ml' type='radio' value={"50ml"}/>
            50ml
        </S.Label>
        <S.Label>
            <S.Options name='ml' type='radio' value={"100ml"}/>
            100ml
        </S.Label>
        <S.Label>
            <S.Options name='ml' type='radio' value={"150ml"}/>
            150ml
        </S.Label>
    </S.DivOptions>
  )
}

export default ProductOptions