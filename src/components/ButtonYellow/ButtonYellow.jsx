import React from 'react'

import s from './ButtonYellow.module.scss'

const ButtonYellow = ({ text, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick() // Вызываем переданный обработчик события клика, если он был передан
    }
  }

  return (
    <div className={s.button} onClick={handleClick}>
      <p>{text}</p>
    </div>
  )
}

export default ButtonYellow
