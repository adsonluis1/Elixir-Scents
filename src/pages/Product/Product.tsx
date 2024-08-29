import Header from '../../components/header/Header'
import * as S from './Product.styled'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'
import { useParams } from 'react-router-dom'
import ProductDescription from '../../components/ProductDescripition/ProductDescription'
import ProductImgs from '../../components/ProductImgs/ProductImgs'
import ProductOptions from '../../components/ProductOptions/ProductOptions'

type TIdAndMarcas = {
    marca:string,
    id:string
}
const Product = () => {
    const {id} = useParams<TIdAndMarcas>()
    console.log(id)

    return (
    <>
        <Header />
        <HeaderMarca dark={true}/>
        <S.Main>
            <S.Section>
                {/* enviar as informações por props */}
                <ProductImgs />
                <S.DivRight>
                    {/* enviar as informações por props */}
                    <ProductDescription />
                    {/* enviar as informações por props */}
                    <ProductOptions />
                </S.DivRight>
            </S.Section>

            <S.Section id='detalhes'>
                
            </S.Section>
        </S.Main>
    </>
  )
}

export default Product