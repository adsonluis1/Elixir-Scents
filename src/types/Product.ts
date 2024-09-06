export type TMarcas = "Chanel" | "Dior" | "Guerlain" | "Yves Saint Laurent" | "Paco Rabanne"

export type Tperfume = {
    marca:"Chanel" | "Dior" | "Guerlain" | "YvesSaintLaurent" | "PacoRabanne" | undefined
}

export interface IAddress {
    street:string
    cep:string
    city:string
    number:number
}

export interface IUserMainInfos {
    name:string
    email:string
    _id:string
}

export interface ICommits {
    user:IUserMainInfos
    message:string
    data:string
    hours:string
}

export interface IProduct {
    name:string
    price:number
    tags:string[]
    profileImage:{path:string}
    description:string
    aroma:string
    _id:number | string
    commits:ICommits
    rate:number
    amount:number
}