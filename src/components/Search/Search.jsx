import React from 'react'

import show from '../../assets/search-icon.svg'
import s from './Search.module.scss'

export const Search = () => {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type='text'
        placeholder='Search by Name...'
      />
      <img className={s.icon} src={show} alt='search-icon' />
    </label>
  )
}
