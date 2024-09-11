import FormEditAddress from '../../components/formEditAddress/FormEditAddress'
import Header from '../../components/header/Header'
import { IUser } from '../../types/User'
import * as S from './EditAddress.styled'

const EditAddress = ({user}:{user:IUser}) => {
    return(
        <>
            <Header />
            <S.Main>
                <S.SectionImg>
                    <S.DivImg />
                </S.SectionImg>
                
                <FormEditAddress user={user}/>
            </S.Main>
        </>
    )
}

export default EditAddress