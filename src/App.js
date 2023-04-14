import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CrmPage } from './pages/CrmPage/CrmPage'
import { LoginPage } from './pages/LoginPage/LoginPage'

import './normalize.css'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path='login' element={<LoginPage />} /> */}
        <Route path='' element={<LoginPage />} />
        <Route path='crm' element={<CrmPage />} />
      </Routes>
    </div>
  )
}

export default App
