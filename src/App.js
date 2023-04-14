import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { contactsSlice } from './redux/slices/contactsSlice'
import { data } from './redux/data'
import { CrmPage } from './pages/CrmPage/CrmPage'
import { LoginPage } from './pages/LoginPage/LoginPage'

import './normalize.css'
import './App.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactsSlice.actions.init(data))
  })

  return (
    // На 'login' должен быть редирект, если isAuth = false.
    <div className='App'>
      <Routes>
        <Route path='' element={<LoginPage />} />
        <Route path='crm' element={<CrmPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
