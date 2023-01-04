import React, { useEffect } from 'react'
import { useCart } from '../../context'
import * as S from './Cart.styled'
import { CartInfo, DeliveryData, PaymentType } from './components'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { CookiesHandler } from '../../utils/cookies'
import { useNavigate } from 'react-router-dom'
import { addDoc } from 'firebase/firestore'
import { requestRef } from '../../lib/firebase'
import { useUser } from '../../context/UserContext'

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  street: yup.string().required('Campo obrigatório'),
  number: yup
    .string()
    .required('Campo obrigatório.')
    .matches(/^\d+$/, 'Apenas números.'),
  district: yup.string().required('Campo obrigatório'),
  complement: yup.string(),
  payment: yup.string().required('Campo obrigatório'),
  save: yup.bool(),
})

export interface IDeliveryDetails {
  name: string
  street: string
  number: string
  district: string
  complement: string
  payment: string
  save: boolean
}

const Cart = () => {
  const { cart, handleClearCart } = useCart()
  const navigate = useNavigate()

  const { user } = useUser()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setValue,
  } = useForm<IDeliveryDetails>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      street: '',
      number: '',
      district: '',
      complement: '',
      payment: '',
      save: false,
    },
  })

  useEffect(() => {
    const data = CookiesHandler.getCookies()
    if (data) {
      setValue('name', data.name)
      setValue('street', data.street)
      setValue('number', data.number)
      setValue('district', data.district)
      setValue('complement', data.complement)
      setValue('payment', data.payment)
      setValue('save', data.save)
    }
  }, [])

  const handleDeliveryForm = (data: IDeliveryDetails) => {
    if (cart.length === 0) {
      return toast.error('Adicione items ao carrinho.')
    }

    if (!data.save) {
      reset({
        name: '',
        street: '',
        number: '',
        district: '',
        complement: '',
        payment: '',
        save: false,
      })

      CookiesHandler.destroyCookies()
    }

    const totalCart = cart
      .map((item) => item.totalPrice!)
      .reduce((sum, price) => sum + price, 0)

    const dataWithStatus = {
      ...data,
      status: 'request_sent',
      cart: {
        cartItems: cart,
        totalItems: totalCart,
        deliveryFee: 3.5,
        total: totalCart + 3.5,
      },
    }

    addDoc(requestRef, dataWithStatus)
      .then((response) => {
        handleClearCart()
        navigate(`/order-status/${response.id}`)
      })
      .catch((error) => console.log(error.message))

    CookiesHandler.setCookies(data)
  }

  if (cart.length === 0) {
    navigate('/')
  }

  return (
    <S.CartWrapper hasUser={!!user ? true : false}>
      <form onSubmit={handleSubmit(handleDeliveryForm)}>
        <S.Delivery>
          <h1 className='font-2'>Complete seu pedido</h1>

          <DeliveryData hookForms={{ control, errors, isSubmitted }} />

          <PaymentType hookForms={{ control, errors, isSubmitted }} />

          <div className='checkbox_wrapper'>
            <Controller
              name='save'
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  type='checkbox'
                  name='save'
                  id='save'
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  tabIndex={-1}
                />
              )}
            />
            <label htmlFor='save' className='font-2'>
              Salvar dados ?
            </label>
          </div>
        </S.Delivery>

        <CartInfo />
      </form>
    </S.CartWrapper>
  )
}

export default Cart
