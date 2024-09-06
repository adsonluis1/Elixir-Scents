import { IAddress, IProduct } from "./Product"

export interface IUser {
    name:string
    _id:string
    email:string
    password:string
    cpf:string | null
    address: null | IAddress
    previosPurchases:IProduct[] | []
    bag:IProduct[] | []
}