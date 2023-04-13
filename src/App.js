import { Route, Routes } from 'react-router-dom'
import { CrmPage } from './pages/CrmPage/CrmPage'
import { LoginPage } from './pages/LoginPage/LoginPage'

import './normalize.css'
import './App.scss'

function App() {
  return (
    // на '/' должен быть CrmPage, на 'login' должен быть редирект, если isAuth false
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='crm' element={<CrmPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
