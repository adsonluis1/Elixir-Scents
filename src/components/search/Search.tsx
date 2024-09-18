import React, { useEffect } from "react"
import * as S from "./Search.styled"
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import useFormSearch from "../../hooks/useFormSearch";
import useDesableScroll from "../../hooks/useDesableScroll";

type Search = {
  setOpenOrCloseSearch:React.Dispatch<React.SetStateAction<boolean>>
}

const Search = ({setOpenOrCloseSearch}:Search) => {
  const {register,handleSubmit,handleSubmitData,errors} = useFormSearch()
  useDesableScroll()
  useEffect(()=>{
    setOpenOrCloseSearch((prev)=> !prev)
  },[handleSubmitData])
  return (
    <S.Section onSubmit={handleSubmit(handleSubmitData)}>
        <S.Form>
          <S.DivForm>
            <S.Input {...register("search")} type="search" placeholder="Procure aqui"/>
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