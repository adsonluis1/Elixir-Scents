import { useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from 'zod'
import { useNavigate } from "react-router-dom";

const schema = z.object({
    search: z.string().max(255,'Pesquisa muito grande')
})

export type InputSearch = z.infer<typeof schema>

const useFormSearch = ()=>{
  const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm<InputSearch>({
        mode:'all',
        defaultValues:{
          search:''
        },
        resolver: zodResolver(schema)
      })

      const handleSubmitData = (data:InputSearch)=>{
        navigate(`/search/${data.search}`)
      }

      return {register,handleSubmit,handleSubmitData,errors}
}

export default useFormSearch
  