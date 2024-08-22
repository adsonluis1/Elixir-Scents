import { useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from 'zod'

const schema = z.object({
    search: z.string().max(255,'Pesquisa muito grande')
})

type InputSearch = z.infer<typeof schema>

const useSearch = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm<InputSearch>({
        mode:'all',
        defaultValues:{
          search:''
        },
        resolver: zodResolver(schema)
      })
      
      const handleSubmiteData = (data:InputSearch)=> {
        // fazer a pesquisa aqui
        console.log(data)
      }

      return {register,handleSubmit,handleSubmiteData,errors}
}

export default useSearch
  