import React from 'react'
import Header from './components/Header/Header'
import Chat from './components/Chat/Chat'
import TinderCards from './components/TinderCards/TinderCards'
import { Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/quazi" element={<TinderCards />} />
        <Route path="/" />
      </Routes>
    </div>
  )
}

export default App
