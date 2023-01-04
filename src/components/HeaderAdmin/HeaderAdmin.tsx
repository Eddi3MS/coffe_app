import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import Button from '../Button'
import * as S from './HeaderAdmin.styled'

const HeaderAdmin = () => {
  const { logout } = useUser()
  return (
    <S.User>
      <Link to='orders-list'>Pedidos</Link>
      <Button onClick={logout} text='Logout' variant='logout' />
    </S.User>
  )
}

export default HeaderAdmin
