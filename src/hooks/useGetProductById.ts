import { useEffect, useState } from "react"
import { IProduct } from "../types/Product"

const useGetProductById = (id:string,marca:string) => {
    marca = marca.charAt(0).toLocaleLowerCase() + marca.slice(1)
    const [product, setProduct] = useState<IProduct|null>(null)
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const dataJson = await fetch(`http://localhost:3333/${marca}/catalogo/${id}`)
                const data = await dataJson.json()
                setProduct(data.product)
            } catch (error) {
                if(error instanceof Error)
                    setError(error.message)
            }finally{
                setLoad(false)
            }
        }
        getProduct()
    },[])    

    return {product, load, error}
}

export default useGetProductById