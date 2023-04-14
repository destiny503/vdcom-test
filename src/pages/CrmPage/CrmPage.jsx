import React, { useState, useEffect } from 'react'
import { Drawer } from '../../components/Drawer'
import { Header } from '../../components/Header/Header'
import { ContactsTab } from '../../components/Tabs/ContactsTab'
import { CalendarTab } from '../../components/Tabs/CalendarTab'
import { ReportTab } from '../../components/Tabs/ReportTab'

import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { contactsSlice } from '../../redux/slices/contactsSlice'
import { data } from '../../redux/data.js'

import s from './CrmPage.module.scss'

export const CrmPage = () => {
  const dispatch = useDispatch()

  const auth = useSelector(state => state.authReducer.auth)
  const redirectToLogin = !auth ? <Navigate to='/' /> : null

  useEffect(() => {
    dispatch(contactsSlice.actions.init(data))
  })

  const [activeTab, setActiveTab] = useState('tab1')

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  return (
    <div className={s.container}>
      {redirectToLogin}
      <Drawer onTabClick={handleTabClick} activeTab={activeTab} />
      <Header />
      <div className={s.content}>
        {activeTab === 'tab1' && <ContactsTab />}
        {activeTab === 'tab2' && <CalendarTab />}
        {activeTab === 'tab3' && <ReportTab />}
      </div>
    </div>
  )
}
