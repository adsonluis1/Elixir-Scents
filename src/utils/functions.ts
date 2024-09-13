import { NavigateFunction } from "react-router-dom"
import { IProduct } from "../types/Product"
import { IUser } from "../types/User"
import useAddProductIntoBag from "../hooks/useAddProductIntoBag"
import React, { SetStateAction } from "react"
import useFinalizePurchase from "../hooks/useFinalizePurchase"
import useRemoveProductByBag from "../hooks/useRemoveProductByBag"


export const handleClickBuyButton = (user:IUser,product:IProduct, navigate:NavigateFunction,setDone:React.Dispatch<SetStateAction<boolean>>)=>{
    if(!user?.cpf){
        navigate('/login')
        return
    }

    useAddProductIntoBag(user,product,setDone)
}

export const handleClickSelectProductFinishBuy = (idProduct:string,labelProduct:string, user:IUser,amount:number,setSelectProduct:React.Dispatch<SetStateAction<IProduct | null>>)=>{
    useFinalizePurchase(idProduct,labelProduct,user,amount)
    useRemoveProductByBag(user._id,idProduct)
    setSelectProduct(null)
}

export const handleClickSelectProductClearBag = (idProduct:string,user:IUser, setSelectProduct:React.Dispatch<SetStateAction<IProduct | null>>)=>{
    useRemoveProductByBag(user._id, idProduct)
    setSelectProduct(null)
}

export const handleClickProductFinishBuy = (products:IProduct[], user:IUser, setBag:React.Dispatch<SetStateAction<IProduct[]>>)=>{
    const idProducts = products.map((product) => product._id)
    const amountProducts = products.map((product) => product.amount)
    const labelproduct = products.map((product) => product.label)
    useFinalizePurchase(idProducts, labelproduct,user,amountProducts)
    useRemoveProductByBag(user._id,idProducts)
    setBag([])
}

export const handleClickProductClearBag = (bag:IProduct[],user:IUser, setBag:React.Dispatch<SetStateAction<IProduct[]>>)=>{
    const idProducts = bag.map((product) => product._id)
    useRemoveProductByBag(user._id, idProducts)
    setBag([])
}