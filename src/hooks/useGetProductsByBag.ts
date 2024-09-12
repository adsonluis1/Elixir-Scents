import { useEffect, useState } from "react"
import { IProduct } from "../types/Product"

const useGetProductsByBag = (idClient:string) => {
    const [bag, setBag] = useState<IProduct[]>([])
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const dataJson = await fetch(`http://localhost:3333/account/getBag/${idClient}`)
                const data = await dataJson.json()
                setBag(data.bag)
            } catch (error) {
                if(error instanceof Error)
                    setError(error.message)
            }finally{
                setLoad(false)
            }
        }
        getProduct()
    },[])    

    return {bag, load, error}


}

export default useGetProductsByBag