import * as S from './Perfumes.styled'
import Header from '../../components/header/Header'
import ShowItens from '../../components/ShowItens/ShowItens'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'

const Perfumes = () => {
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
        <HeaderMarca dark={false}/>
        <S.SectionProducts>
            {products.map((product,index)=>[
              <ShowItens key={index} product={product}/>
            ])}
        </S.SectionProducts>
    </S.Main>
    </>
  )
}

export default Perfumes