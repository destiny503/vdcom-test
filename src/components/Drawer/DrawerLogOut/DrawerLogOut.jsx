import React from 'react'

import icon from '../../../assets/logout-button.svg'

import s from './DrawerLogOut.module.scss'

export const DrawerLogOut = () => {
  return (
    <div className={s.button}>
      <img className={s.icon} src={icon} alt='icon' />
      <p className={s.text}>Log out</p>
    </div>
  )
}
