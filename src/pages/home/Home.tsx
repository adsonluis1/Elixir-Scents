import * as S from './Home.styled'
import Header from '../../components/header/Header'
import Carrossel from '../../components/Carrossel/Carrossel'
import Propaganda from '../../components/Propaganda/Propaganda'

const Home = () => {  
  return (
    <>
        <Header />
        <S.Main>
            <Carrossel title={"Mais vendidos"}>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
                <S.Img src='/img/Dior/masculino-600x600.webp'/>
            </Carrossel>
          <S.SectionPropaganda>
            <Propaganda reverse={false} title={'Chanel'} sr={"Chanel"}/>
            <Propaganda reverse={true} title='Dior' sr='Dior'/>
            <Propaganda reverse={false} title='Guerlain'sr="Guerlain"/>
            <Propaganda reverse={true} title='Yves Saint Laurent' sr='Yves Saint Laurent'/>
            <Propaganda reverse={false} title='Paco Rabanne' sr='Paco Rabanne'/>
          </S.SectionPropaganda>
        </S.Main>
    </>

  )
}

export default Home