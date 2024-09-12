import { IUser } from "../types/User"

const useFinalizePurchase = async (idProduct:string | string,labelProduct:string,user:IUser,amount:number) => {
    await fetch('http://localhost:3333/account/buy',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({idProduct,labelProduct,user,amount})
    })
}

export default useFinalizePurchase