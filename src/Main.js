import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientsPage from './pages/Clients/ClientsPage'
import OneClient from './pages/oneClient/OneClient'

function Main() {
  return (
    <>
        <Routes>
            <Route index element={<ClientsPage/>}/>
            <Route path='/:id' element={<OneClient/>}/>
        </Routes>
    </>
  )
}

export default Main