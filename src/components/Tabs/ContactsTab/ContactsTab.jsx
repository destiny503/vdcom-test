import React, { useState } from 'react'
import ContactTable from '../ContactsTab/ContactsTable/ContactsTable'
import ButtonYellow from '../../ButtonYellow/ButtonYellow'

import s from './ContactsTab.module.scss'

export const ContactsTab = () => {
  const [isOpen, setIsOpen] = useState(false)

  const addNewContact = () => {
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>Total Contacts</div>
        {isOpen && <div className={s.newContact}></div>}
        <div className={s.buttons}>
          <ButtonYellow text='Add +' onClick={addNewContact} />
          <ButtonYellow text='Delete' onClick={addNewContact} />
        </div>
      </div>
      <div className={s.table}>
        <ContactTable />
      </div>
      {isOpen && (
        <div className={s.popup}>
          <div className={s.popupContent}>
            <div className={s.closeButton} onClick={closePopup}>
              &times;
            </div>
            <div className={s.popupBody}>
              <h3>Popup Content</h3>
              <p>This is a popup content.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
