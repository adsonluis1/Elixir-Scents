import { NavigateFunction } from "react-router-dom"
import { IProduct } from "../types/Product"
import { IUser } from "../types/User"
import useAddProductIntoBag from "../hooks/useAddProductIntoBag"
import React, { SetStateAction } from "react"


export const handleClickBuyButton = (user:IUser,product:IProduct, navigate:NavigateFunction,setDone:React.Dispatch<SetStateAction<boolean>>)=>{
    if(!user?.cpf){
        navigate('/login')
        return
    }

    useAddProductIntoBag(user,product,setDone)
}