import React from 'react'

import s from './ButtonYellow.module.scss'

const ButtonYellow = ({ text }) => {
  return (
    <div className={s.button}>
      <p>{text}</p>
    </div>
  )
}

export default ButtonYellow
