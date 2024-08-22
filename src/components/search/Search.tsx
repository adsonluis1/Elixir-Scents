import React from "react"
import * as S from "./Search.styled"
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import useSearch from "../../hooks/useSearch";

type Search = {
  setOpenOrCloseSearch:React.Dispatch<React.SetStateAction<boolean>>
}

const Search = ({setOpenOrCloseSearch}:Search) => {
  const {register,handleSubmit,handleSubmiteData,errors} = useSearch()

  return (
    <S.Section onSubmit={handleSubmit(handleSubmiteData)}>
        <S.Form>
          <S.DivForm>
            <S.Input {...register("search")} placeholder="Procure aqui"/>
            <S.Button type="submit"><FaSearch /></S.Button>
            <S.Button onClick={()=> setOpenOrCloseSearch((prev)=> !prev)}><IoMdClose/></S.Button>
          </S.DivForm>
          {errors?.search &&
            <S.DivError>
              <S.Error>{errors.search.message}</S.Error>
            </S.DivError>
          }
        </S.Form>
    </S.Section>
  )
}

export default Search