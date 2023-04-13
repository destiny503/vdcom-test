import React from 'react'
import { Link } from 'react-router-dom'

import s from './Logo.module.scss'

export const Logo = () => {
  return (
    <Link to='/crm' style={{ textDecoration: 'none' }}>
      <div className={s.logo}>Logo</div>
    </Link>
  )
}
