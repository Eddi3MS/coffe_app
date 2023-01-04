import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { db, requestRef } from '../../lib/firebase'
import { OrderColumn } from './components'
import * as S from './OrderManagement.styled'
import sound from '../../assets/sound.wav'
import { useUser } from '../../context/UserContext'

interface ICartItem {
  id: number
  quantity: number
  name: string
  price: number
  totalPrice: number
}

export interface IRequestData {
  id: string
  data: {
    complement: string
    status: string
    number: string
    save: boolean
    district: string
    name: string
    street: string
    payment: string
    cart: {
      cartItems: ICartItem[]
      deliveryFee: number
      total: number
      totalItems: number
    }
  }
}

const OrderManagement = () => {
  const [data, setData] = useState<IRequestData[] | null>([])
  const [checker, setChecker] = useState(0)

  const { user } = useUser()

  useEffect(() => {
    const unsubscribe = onSnapshot(requestRef, (snapshot) => {
      let data = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })) as IRequestData[]

      setData(data)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (data && data.length !== checker) {
      let audio = new Audio(sound)
      audio.play()

      setChecker(data.length)
    }
  }, [data])

  const newReq = data?.filter((data) => data.data.status === 'request_sent')

  const acceptedReq = data?.filter(
    (data) => data.data.status === 'request_accepted'
  )
  const deniedReq = data?.filter(
    (data) => data.data.status === 'request_denied'
  )
  const leftReq = data?.filter((data) => data.data.status === 'request_left')

  const deliveredReq = data?.filter(
    (data) => data.data.status === 'request_delivered'
  )

  const updateDocument = (id: string, status: string) => {
    if (!status || !id) {
      return
    }

    const docRef = doc(db, 'requests', id)
    updateDoc(docRef, { status })
      .then((r) => console.log(r))
      .catch((err) => console.log(err))
  }
  return (
    <S.Kanbam>
      {newReq && newReq.length > 0 && (
        <OrderColumn
          buttons={[
            {
              id: 1,
              label: 'Aceitar Pedido',
              onClick: (id: string) => updateDocument(id, 'request_accepted'),
            },
            {
              id: 2,
              label: 'Recusar Pedido',
              onClick: (id: string) => updateDocument(id, 'request_denied'),
            },
          ]}
          requests={newReq}
          title='Novos Pedidos'
        />
      )}

      {acceptedReq && acceptedReq.length > 0 && (
        <OrderColumn
          buttons={[
            {
              id: 1,
              label: 'Saiu para Entrega',
              onClick: (id: string) => updateDocument(id, 'request_left'),
            },
          ]}
          requests={acceptedReq}
          title='Pedidos Aceitos'
        />
      )}

      {leftReq && leftReq.length > 0 && (
        <OrderColumn
          buttons={[
            {
              id: 1,
              label: 'Pedido Entregue',
              onClick: (id: string) => updateDocument(id, 'request_delivered'),
            },
          ]}
          requests={leftReq}
          title='Saiu para Entrega'
        />
      )}

      {deniedReq && deniedReq.length > 0 && (
        <OrderColumn
          buttons={[]}
          requests={deniedReq}
          title='Pedidos Recusados'
        />
      )}

      {deliveredReq && deliveredReq.length > 0 && (
        <OrderColumn
          buttons={[]}
          requests={deliveredReq}
          title='Pedidos Concluidos'
        />
      )}
    </S.Kanbam>
  )
}

export default OrderManagement
