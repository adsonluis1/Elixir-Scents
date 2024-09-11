import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from 'zod'

const schema = z.object({
    cpf:z.string().min(14,'Cpf invalido'),
    cep:z.string().min(9,'CEP invalido'),
    city:z.string(),
    neighborhood:z.string(),
    street:z.string(),
    number:z.string(),
    state:z.string(),
    _id:z.string().max(24)
})

export type TEditAddress = z.infer<typeof schema>

const useFormEditAddress = () => { 
    const {register, handleSubmit, watch,setValue,formState:{errors}} = useForm<TEditAddress>({
        mode:'onBlur',
        reValidateMode:"onChange",
        defaultValues:{
            cep:"",
            city:"",
            cpf:"",
            neighborhood:"",
            number:"",
            street:"",
            _id:""
        },
        resolver:zodResolver(schema)
    }) 

    return {register,handleSubmit,watch, setValue, errors}
}

export default useFormEditAddress