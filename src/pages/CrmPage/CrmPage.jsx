import React, { useState } from 'react'
import { Drawer } from '../../components/Drawer'
import { Header } from '../../components/Header/Header'
import { ContactsTab } from '../../components/Tabs/ContactsTab'
import { CalendarTab } from '../../components/Tabs/CalendarTab'
import { ReportTab } from '../../components/Tabs/ReportTab'

import s from './CrmPage.module.scss'

export const CrmPage = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  return (
    <div className={s.container}>
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
