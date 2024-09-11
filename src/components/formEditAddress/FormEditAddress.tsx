import { useEffect } from 'react'
import useFormEditAddress from '../../hooks/useFormEditAddress'
import * as S from './FormEditAddress.styled'
import useGetInfoAddress from '../../hooks/useGetInfoAddress'
import { IUser } from '../../types/User'
import useAddNewAddress from '../../hooks/useAddNewAddress'

const maskCpf = (cpf:string)=>{
  cpf = cpf.replace(/\D!-/g,"")
  cpf = cpf.replace(/^(\d{3})(\d)/,"$1.$2")
  cpf = cpf.replace(/^(\d{3}\.)(\d{3})(\d)/,"$1$2.$3")
  cpf = cpf.replace(/^(\d{3}\.)(\d{3}\.)(\d{3})(\d)$/,"$1$2$3-$4")
  return cpf
}

const maskCep = (cep:string)=>{
  cep = cep.replace(/\D!-/g,"")
  cep = cep.replace(/^(\d{5})(\d{1})/,"$1-$2")
  return cep
}

const FormEditAddress = ({user}:{user:IUser}) => {
  const {register,handleSubmit,setValue, watch,errors} = useFormEditAddress()
  
  useEffect(()=>{
    setValue('_id', user._id)
    setValue('cep', user.address?.cep!)
    setValue('city', user.address?.city!)
    setValue('cpf', user.cpf!)
    setValue('neighborhood', user.address?.neighborhood!)
    setValue('number', user.address?.number!)
    setValue('state', user.address?.state!)
    setValue('street',user.address?.street!)
  },[])

  useEffect(()=>{
    setValue('cpf', maskCpf(watch().cpf))
  },[watch().cpf, setValue])

  useEffect(()=>{
    setValue('cep', maskCep(watch().cep))
    useGetInfoAddress(watch('cep'), setValue)
  },[watch().cep, setValue])

  return (
    <S.Section>
      <S.DivTitle>
        <S.Title>Edite seu endereço</S.Title>
        <S.Description>Coloque novas informações ou mude as antigas</S.Description>
      </S.DivTitle>

      <S.Form onSubmit={handleSubmit(useAddNewAddress)}>
        <S.Input maxLength={14} {...register('cpf')} type='text' placeholder='CPF'/>
        {errors.cpf && 
          <S.Error>{errors.cpf.message}</S.Error>
        }
        <S.Input maxLength={9} {...register('cep')} type='text' placeholder='Cep'/>
        {errors.cep &&
          <S.Error>{errors.cep.message}</S.Error>
        }
        <S.Input required {...register('state')} type='text' placeholder='Estado'/> 
        <S.Input required {...register('city')} type='text' placeholder='Cidade' />
        <S.Input required {...register('neighborhood')} type='text' placeholder='Bairro' />
        <S.Input required {...register('street')} type='text' placeholder='Rua' />
        <S.Input required {...register('number')} type='text' placeholder='Número' />
        <S.Button type='submit'>Enviar</S.Button>

        <S.Input {...register("_id")} type='hidden' value={user._id}/>
      </S.Form>
    </S.Section>
  )
}

export default FormEditAddress