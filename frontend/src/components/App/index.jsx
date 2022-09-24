import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from 'components/ProtectedRoute'
import Main from './componets/Main'
import Login from './componets/Login'

const App = () => (
  <div>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route path='*' element={
        <ProtectedRoute>
          <Main />
        </ProtectedRoute>
      } />
    </Routes>
  </div>
)

export default App

