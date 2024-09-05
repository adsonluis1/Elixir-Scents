import Header from '../../components/header/Header'
import * as S from './Product.styled'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'
import { useParams } from 'react-router-dom'
import ProductDescription from '../../components/ProductDescripition/ProductDescription'
import ProductImgs from '../../components/ProductImgs/ProductImgs'
import ProductOptions from '../../components/ProductOptions/ProductOptions'
import useGetProductById from '../../hooks/useGetProductById'
import ProductMaisDetalhes from '../../components/ProductMaisDetalhes/ProductMaisDetalhes'

type TIdAndMarcas = {
    marca:string,
    id:string
}
const Product = () => {
    const {id,marca} = useParams<TIdAndMarcas>()
    const {product,error,load} = useGetProductById(id!,marca!)
    
    return (
    <>
        <Header />
        <HeaderMarca dark={true}/>
        {product &&
        <S.Main>
            <S.Section>
                <ProductImgs url={product.profileImage.path}/>
                <S.DivRight>
                    <ProductDescription name={product.name} price={product.price} tags={product.tags} key={product._id}/>
                    <ProductOptions />
                </S.DivRight>
            </S.Section>

            <S.Section id='detalhes'>
                <ProductMaisDetalhes aroma={product.aroma} description={product.description}/>
            </S.Section>
        </S.Main>
        }

        {load && 
            <S.Loader>Carregando...</S.Loader>
        }
        {error && 
            <S.Error>Error ao carregar a página</S.Error>
        }
    </>
  )
}

export default Product