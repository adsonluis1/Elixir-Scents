import * as S from './Perfumes.styled'
import Header from '../../components/header/Header'
import ShowItens from '../../components/ShowItens/ShowItens'
import HeaderMarca from '../../components/HeaderMarca/HeaderMarca'

const Perfumes = () => {
  return (
    <>
    <Header />
    <S.Main>
        <HeaderMarca dark={false}/>
        <S.SectionProducts>
            <ShowItens name='Homme' price={959.99} img='/img/Dior/masculino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Miss Dior' price={839.99} img='/img/Dior/feminino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Homme' price={959.99} img='/img/Dior/masculino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Miss Dior' price={839.99} img='/img/Dior/feminino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Homme' price={959.99} img='/img/Dior/masculino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Miss Dior' price={839.99} img='/img/Dior/feminino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Homme' price={959.99} img='/img/Dior/masculino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
            <ShowItens name='Miss Dior' price={839.99} img='/img/Dior/feminino-600x600.webp' tags={['#novidade', '#Exclusivo']}/>
        </S.SectionProducts>
    </S.Main>
    </>
  )
}

export default Perfumes