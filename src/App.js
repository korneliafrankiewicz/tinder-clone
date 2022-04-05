import React from 'react'
import Header from './components/Header/Header'
import Chat from './components/Chat/Chat'
import { Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
