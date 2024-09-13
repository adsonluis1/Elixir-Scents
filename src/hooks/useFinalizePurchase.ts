import { IUser } from "../types/User"

const useFinalizePurchase = async (idProduct:string[]|string,labelProduct:string[]|string,user:IUser,amount:number[]|number) => {
    const product = {
        idProduct,
        labelProduct,
        user:{
            _id:user._id,
            cpf:user.cpf,
            address:user.address
        },
        amount
    }

    console.log(product)
    try {
        await fetch('http://localhost:3333/account/buy',{
            method:'POST',
            body:JSON.stringify(product),
            headers:{
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default useFinalizePurchase