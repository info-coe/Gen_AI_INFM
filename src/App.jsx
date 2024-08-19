import React from 'react'
import './App.css'
import GENAI from './GENAI'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InfoScan from './Infoscan'
import InfoAIAccelerator from './InfoAIAccelerator'
import Scrolltotop from './Scrolltotop'

function App() {

  return (
    <>
      <BrowserRouter basename='Gen_AI_INFM'>
      <Scrolltotop />
        <Routes>
          <Route path="/" element={<GENAI />} />
          <Route path='infoscan' element={<InfoScan/>}/>
          <Route path='infoaiaccelerator' element={<InfoAIAccelerator/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
