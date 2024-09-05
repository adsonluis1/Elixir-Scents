import * as S from './Perfumes.styled'
import Header from '../../components/header/Header'
import ShowItens from '../../components/ShowItens/ShowItens'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'
import useGetProductsLabel from '../../hooks/useGetProductsLabel'

const Perfumes = () => {
  const {products, load, error} = useGetProductsLabel('Chanel')
  return (
    <>
    <Header />
    <S.Main>
        <HeaderMarca dark={false}/>
        {products && 
          <S.SectionProducts>
              {products.map((product,index)=>[
                <ShowItens key={index} product={product}/>
              ])}
          </S.SectionProducts>
        }

        {load && !error ? 
        <S.Loader>Carregando...</S.Loader>
        :""
        }

        {!load && error ? 
        <S.Error>Error ao conectar com o servidor</S.Error>
        :"" 
      }
    </S.Main>
    </>
  )
}

export default Perfumes