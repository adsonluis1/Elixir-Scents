import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from "react-hook-form"

const schema = z.object({
    login:z.string().max(18,"Login precisa ter no maimo 18 caracteres").min(4,"Login precisa ter no mínimo 4 caracteres"),
    email:z.string().email("Incira um endereço de email correto"),
    senha:z.string().min(6,"A senha precisa ter no mínimo 6 caracteres"),
    confirmSenha:z.string().min(6,"A senha precisa ter no mínimo 6 caracteres")
}).refine((chields)=> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(chields.senha), {
    path:["senha"],
    message:"A senha precisa conter letras maiusculas e minusculas, digitos e simbolos"
}).refine((chields)=> chields.senha === chields.confirmSenha, {
    path:["confirmSenha"],
    message:"Senhas diferenetes"
})

type Register = z.infer<typeof schema>

const useRegister = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm<Register>({
        mode:"onBlur",
        defaultValues:{
            login:"",
            email:"",
            senha:"",
            confirmSenha:""
        },
        resolver:zodResolver(schema)
    })

    const handleSubmitData = (data:Register)=>{
        console.log(data)
    }

    return {register,handleSubmit,handleSubmitData,errors}

}

export default useRegister