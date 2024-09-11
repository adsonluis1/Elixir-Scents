import { TEditAddress } from "./useFormEditAddress"

const useAddNewAddress = async (address:TEditAddress) => {
    let error = null
    let cpf = address.cpf
    let idClient = address._id
    const {cep,city,neighborhood,number,state,street} = address
    let newAddress = {
        cep,
        city,
        neighborhood,
        number,
        state,
        street
    }
    try {
        console.log('foi')
        console.log(address)
        const dataJson = await fetch('http://localhost:3333/account/addAdditionalInfo',{
            method:"PATCH",
            body:JSON.stringify({idClient,cpf,...newAddress}),
            headers:{
                "Content-Type": "application/json"
            }        
        })
        const data = await dataJson.json()
        console.log(data)
    } catch (err) {
        if(err instanceof Error)
            error = err.message
    }

    return error
}

export default useAddNewAddress