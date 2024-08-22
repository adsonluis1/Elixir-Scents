import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
    login:z.string().max(18,"Login precisa ter no maimo 18 caracteres").min(4,"Login precisa ter no mínimo 4 caracteres"),
    senha:z.string().min(6,"A senha precisa ter no mínimo 6 caracteres")
}).refine((chields)=> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(chields.senha), {
    path:["senha"],
    message:"A senha precisa conter letras maiusculas e minusculas, digitos e sinais"
})

type Login = z.infer<typeof schema>

const useLogin = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm<Login>({
        mode:'onBlur',
        reValidateMode:"onChange",
        defaultValues:{
            login:'',
            senha:''
        },
        resolver:zodResolver(schema)
    })

    const handleSubmitData = (data:Login)=>{
        console.log(data)
    }


    return {register, handleSubmit, handleSubmitData, errors}
}

export default useLogin