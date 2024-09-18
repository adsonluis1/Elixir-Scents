import * as S from "./ProductSearch.styled"
import { useParams } from "react-router-dom"
import Header from "../../components/header/Header"
import useSearch from "../../hooks/useSearch"
import ShowItens from "../../components/ShowItens/ShowItens"

const ProductSearch = () => {
    const {productSearch} = useParams()
    const {products,error,load} = useSearch(productSearch!)
    console.log(productSearch)
    return (
    <>
        <Header />
        <S.Main>
            {products?.length! > 0 &&
            <>
                <S.Title>Produtos encontrados</S.Title>
                <S.SectionProducts>
                   {products?.map((product)=>[
                    <ShowItens product={product}/>
                ])}
                </S.SectionProducts>
            </>
            }

            {products?.length! == 0 &&
                <S.Title>Nenhum produto encontrado...</S.Title>
            }
        </S.Main>
       
    </>
  )
}

export default ProductSearch