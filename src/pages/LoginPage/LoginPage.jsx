import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button/Button'

import s from './LoginPage.module.scss'

export const LoginPage = () => {
  return (
    <div className={s.container}>
      <Logo />
      <div className={s.welcomeText}>
        Welcome To CRM System
        <br />
        Sign In To Your Account
      </div>
      <div className={s.inputBlock}>
        <Input inputName='Login' inputType='text' />
        <Input inputName='Password' inputType='password' />
      </div>
      <Link to='/crm' style={{ textDecoration: 'none' }}>
        <Button />
      </Link>
    </div>
  )
}
