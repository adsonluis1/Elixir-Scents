import { useEffect, useState } from "react"
import { IProductPurchase } from "../types/Product"

const useGetPurchaseHistory = (idClient:string) => {
    const [products, setProducts] = useState<IProductPurchase[] | []>([])
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string>('')


    useEffect(()=>{
        const getPurchaseProduct = async ()=>{
            try {
                const dataJson = await fetch(`http://localhost:3333/account/getHistory/${idClient}`)
                const data = await dataJson.json()
                setProducts(data.previousPurchases)    
            } catch (err) {
                if(err instanceof Error)
                    setError(err.message)
            }finally{
                setLoad(false)
            }
        }

        getPurchaseProduct()
    },[])

    return {products, load, error}

}

export default useGetPurchaseHistory