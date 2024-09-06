import { IUser } from "../types/User"
import { IProduct } from "../types/Product"
import React, { SetStateAction } from "react"

const useAddProductIntoBag =  (user:IUser,product:IProduct,setDone:React.Dispatch<SetStateAction<boolean>>) => {
    let idClient = user._id
    let error = ""
    product.amount = 1
    const addProduct = async ()=>{
    try {
        const jsonData = await fetch("http://localhost:3333/account/addProductIntoBag",{
            method:"POST",
            body:JSON.stringify({idClient,product}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const data = await jsonData.json()
        setDone(data.message?true:false)
    } catch (err) {
        if(err instanceof Error)
            error = err.message
    }
    }

    addProduct()
    
    return {error}
}


export default useAddProductIntoBag