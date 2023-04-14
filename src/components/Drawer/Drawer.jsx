import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginReducer } from '../../redux/slices/authSlice'
import { Logo } from '../Logo'
import { DrawerButton } from '../Drawer/DrawerButton'
import { DrawerLogOut } from '../Drawer/DrawerLogOut/DrawerLogOut'

import icon1 from '../../assets/contacts-button.svg'
import icon2 from '../../assets/calendar-button.svg'
import icon3 from '../../assets/report-button.svg'

import s from './Drawer.module.scss'

export const Drawer = ({ onTabClick, activeTab }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const auth = () => {
    const user = {
      auth: false,
    }
    dispatch(loginReducer(user))
    navigate('../')
  }

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.buttons}>
        <DrawerButton
          img={icon1}
          text='Total Contacts'
          onClick={() => onTabClick('tab1')}
          isActive={activeTab === 'tab1' ? true : false}
        />

        <DrawerButton
          img={icon2}
          text='Calendar'
          onClick={() => onTabClick('tab2')}
          isActive={activeTab === 'tab2' ? true : false}
        />
        <DrawerButton
          img={icon3}
          text='Project Report'
          onClick={() => onTabClick('tab3')}
          isActive={activeTab === 'tab3' ? true : false}
        />
      </div>
      <div className={s.logout}>
        <DrawerLogOut onClick={auth} />
      </div>
    </div>
  )
}
