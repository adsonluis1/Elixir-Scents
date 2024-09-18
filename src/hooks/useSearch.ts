import { useEffect, useState } from "react"
import { IProduct } from "../types/Product"

const useSearch = (productSearch:string) => {
    const [products, setProducts] = useState<IProduct[]>()
    const [error, setError] = useState("")
    const [load, setLoad] = useState(true)
    useEffect(()=>{
        const search = async ()=>{
            try {
                const dataJson = await fetch(`http://localhost:3333/account/search/${productSearch}`)
                const data = await dataJson.json()
                setProducts(data.foundProducts)
            } catch (error) {
                if(error instanceof Error)
                    setError(error.message)
            }finally{
                setLoad(false)
            }
        }

        search()
    },[productSearch])
    return {products,load,error}
}

export default useSearch