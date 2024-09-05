import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useContext } from "react"
import { Context} from "../context/Login"
import { useNavigate } from "react-router-dom"

type TUseLogin = {
    email:string,
    password:string
}

const schema = z.object({
    email:z.string().email('Digite seu email corretamente'),
    password:z.string().min(6,"A senha precisa ter no mínimo 6 caracteres")
}).refine((chields)=> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(chields.password), {
    path:["senha"],
    message:"A senha precisa conter letras maiusculas e minusculas, digitos e sinais"
})

type Login = z.infer<typeof schema>

const useFormLogin = ()=>{
    let vlogin = {} 
    let error = ''
    let load = true
    const navigate = useNavigate()
    const {setUser} = useContext(Context)
    const {register,handleSubmit,formState:{errors},setError} = useForm<Login>({
        mode:'onBlur',
        reValidateMode:"onChange",
        defaultValues:{
            email:'',
            password:''
        },
        resolver:zodResolver(schema)
    })

   const useLogin = async (credenciais:TUseLogin)=>{
            try {
                const dataJson = await fetch('http://localhost:3333/account/login',{
                    method:'POST',
                    body:JSON.stringify(credenciais),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                const data = await dataJson.json()
    
                if(dataJson.status == 400 && data.message.indexOf("password") != -1){
                    setError('password',{type:"custom", message:"Senha incorreta"})
                    return
                }

                if(dataJson.status == 400 && data.message.indexOf("User") != -1){
                    setError('email',{type:"custom", message:"Email não cadastrado"})
                    return
                }
                vlogin = data.message
                setUser(vlogin)
                navigate("/")
            } catch (err) {
                if(err instanceof Error)
                    error = err.message
            }finally{
                load = false
            }
                
   }


    return {register, handleSubmit, errors,useLogin, error, load}
}

export default useFormLogin