import React from 'react'

import show from '../../assets/show-password-button.svg'
import s from './Input.module.scss'

export const Input = ({ inputName, inputType }) => {
  return (
    <label className={s.label}>
      <span className={s.name}>{inputName}</span>
      <input className={s.input} type={inputType} />
      {inputType === 'password' && (
        <img className={s.showIcon} src={show} alt='show' />
      )}
    </label>
  )
}
