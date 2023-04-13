import React from 'react'

import s from './DrawerButton.module.scss'

export const DrawerButton = ({
  img,
  text,
  isActive = false,
  onClick,
}) => {
  const buttonClassName = `${s.button} ${isActive ? s.active : ''}`

  const handleClick = () => {
    onClick(text)
  }

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <img className={s.icon} src={img} alt='icon' />
      <p className={s.text}>{text}</p>
    </div>
  )
}
