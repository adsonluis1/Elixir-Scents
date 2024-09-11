import { UseFormSetValue } from "react-hook-form"
import { TEditAddress } from "./useFormEditAddress"

const useGetInfoAddress = (cep:string,setValue:UseFormSetValue<TEditAddress>) => {
    let data = null
    if(cep.length != 9)
        return
    let error = null
    cep = cep.replace('-','')
    const GetInfoAddress = async ()=>{
        try {
            const dataJson = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dataInfo = await dataJson.json()
            setValue('state',dataInfo.estado)
            setValue('city',dataInfo.localidade)
            setValue('neighborhood',dataInfo.bairro)
            setValue('street',dataInfo.logradouro)
            console.log(dataInfo)
            data = dataInfo
        } catch (err) {
            error = err
        }
    }

    GetInfoAddress()

    return {data,error}
}

export default useGetInfoAddress