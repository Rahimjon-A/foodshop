import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Example from './components/Example.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/percent' element={<Example/>} />
        <Route path='/chart' element={<Example/>} />
        <Route path='/message' element={<Example/>} />
        <Route path='/notification' element={<Example/>} />
        <Route path='/settings' element={<Example/>} />
        <Route path='/profile' element={<Example/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
