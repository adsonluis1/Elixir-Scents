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
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
                <S.Img src='/img/login.webp'></S.Img>
            </Carrossel>
          <S.Section>
            <Propaganda reverse={false} title={'Chanel'} sr={"Chanel"}/>
            <Propaganda reverse={true} title='Dior' sr='Dior'/>
            <Propaganda reverse={false} title='Giorgio Armani'sr="Giorgio Armani"/>
            <Propaganda reverse={true} title='Yves Saint Laurent' sr='Yves Saint Laurent'/>
            <Propaganda reverse={false} title='Lancome' sr='Lancome'/>
          </S.Section>
        </S.Main>
    </>

  )
}

export default Home