import React from 'react'
import ButtonYellow from '../../ButtonYellow/ButtonYellow'

import s from './ContactsTab.module.scss'

export const ContactsTab = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>Total Contacts</div>
        <ButtonYellow />
      </div>
      <div className={s.table}>ТАБЛИЦА</div>
      <div className={s.bottom}>
        <div className={s.pagination}>
          <button className={s.paginationPrev}>&#60;</button>
          <ul className={s.paginationList}>
            <li className={`${s.paginationItem} ${s.active}`}>1</li>
            <li className={s.paginationItem}>2</li>
            <li className={s.paginationItem}>3</li>
            <li className={s.paginationItem}>4</li>
          </ul>
          <button className={s.paginationNext}>&#62;</button>
        </div>
      </div>
    </div>
  )
}
