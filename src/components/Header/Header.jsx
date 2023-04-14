import React from 'react'
import { Search } from '../Search/Search'
import { User } from '../User/User'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.container}>
      <div></div>
      {/* <Search /> */}
      <User />
    </div>
  )
}
