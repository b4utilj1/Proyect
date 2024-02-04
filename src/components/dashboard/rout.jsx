import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from './home'
export const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
    </>
  )
}
