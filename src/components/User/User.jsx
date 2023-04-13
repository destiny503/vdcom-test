import React from 'react'

import userImg from '../../assets/user-photo.jpg'
import s from './User.module.scss'

export const User = () => {
  return (
    <div className={s.user}>
      <img className={s.img} src={userImg} alt="photo" />
      <div className={s.info}>
        <div className={s.name}>Mr. Director</div>
        <div className={s.position}>Managing Director</div>
      </div>
    </div>
  )
}
