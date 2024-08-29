import Header from '../../components/header/Header'
import * as S from './PerfumesSexo.styled'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'
import { useParams } from 'react-router-dom'
import ShowItens from '../../components/ShowItens/ShowItens'

export type TMarcas = {
  marca:"Chanel" | "Dior" | "Guerlain" | "YvesSaintLaurent" | "PacoRabanne" | undefined
}

const PefumesSexo = () => {
  const {marca} = useParams<TMarcas>()
  const sexo = document.URL.split('/')[4]

  const products = [
    {
      id:1, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/masculino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:2, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/feminino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:3, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/masculino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:4, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/feminino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:5, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/masculino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:6, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/feminino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:7, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/masculino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    },
    {
      id:8, 
      name:'Homme', 
      price:959.99,
      img:'/img/Dior/feminino-600x600.webp', 
      tags:['#novidade', '#Exclusivo']
    }
  ]

  return (
    <>
        <Header />
        <S.Main>
            <HeaderMarca dark={true}/>
            <S.Img src={`/img/${marca}/propaganda-${sexo}-grande.webp`} alt={`propaganda da ${marca}`} />
          <S.SectionProducts>
            {products.map((product)=>[
              <ShowItens key={product.id.toString()} product={product}/>
            ])}
        </S.SectionProducts>
        </S.Main>
    </>
  )
}

export default PefumesSexo