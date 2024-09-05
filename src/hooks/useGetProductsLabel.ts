import { useEffect, useState } from "react"

const useGetProductsLabel = (label:string) => {
    label = label.charAt(0).toLocaleLowerCase() + label.slice(1)
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const dataJson = await fetch(`http://localhost:3333/${label}/catalogo`)
                const data = await dataJson.json()
                setProducts(data.products)
            } catch (error) {
                if(error instanceof Error)
                    setError(error.message)
            }finally{
                setLoad(false)
            }
        }
        getProduct()
    },[])    

    return {products, load, error}
}

export default useGetProductsLabel