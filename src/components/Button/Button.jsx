import React from 'react'

import s from './Button.module.scss'

export const Button = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={s.button} onClick={handleClick}>
      <p>Sign In</p>
    </div>
  )
}
