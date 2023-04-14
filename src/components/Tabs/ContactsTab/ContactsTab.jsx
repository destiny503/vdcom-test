import React, { useState } from 'react'
import ContactTable from '../ContactsTab/ContactsTable/ContactsTable'
import ButtonYellow from '../../ButtonYellow/ButtonYellow'

import s from './ContactsTab.module.scss'

export const ContactsTab = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false)

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>Total Contacts</div>
        <div className={s.newContact}>
          <ButtonYellow
            text='Add +'
            onClick={() => setCreateModalOpen(true)}
          />
        </div>
      </div>
      <div className={s.table}>
        <ContactTable createModalOpen={createModalOpen} setCreateModalOpen={setCreateModalOpen}/>
      </div>
    </div>
  )
}
