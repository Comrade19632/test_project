import React from 'react'
import { Route, Routes } from 'react-router-dom'
import style from './index.module.sass'
import ExtensionPhones from './components/ExtensionPhones'
import NotFound from './components/NotFound'
import Profile from './components/Profile'

const Content = () => (
  <div className={style.content}>
    <Routes>
      <Route exact path='/' element={<ExtensionPhones/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
)

export default Content