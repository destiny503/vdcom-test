import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginReducer } from '../../redux/slices/authSlice'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import s from './LoginPage.module.scss'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const auth = () => {
    const user = {
      login,
      password,
      auth: true,
    }
    dispatch(loginReducer(user))
    navigate('crm')
  }

  return (
    <div className={s.container}>
      <Logo />
      <div className={s.welcomeText}>
        Welcome To CRM System
        <br />
        Sign In To Your Account
      </div>
      <div className={s.inputBlock}>
        <Input
          inputName='Login'
          inputType='text'
          onChange={e => setLogin(e.target.value)}
        />
        <Input
          inputName='Password'
          inputType='password'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={auth} />
    </div>
  )
}
