import React, { useState } from 'react'

import show from '../../assets/show-password-button.svg'
import s from './Input.module.scss'

export const Input = ({ inputName, inputType }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <label className={s.label}>
      <span className={s.name}>{inputName}</span>
      <input
        className={s.input}
        type={showPassword ? 'text' : inputType}
      />
      {inputType === 'password' && (
        <img
          className={s.showIcon}
          onClick={handleTogglePassword}
          src={show}
          alt='show'
        />
      )}
    </label>
  )
}
