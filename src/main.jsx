import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Course from './pages/Course'
import Error from './pages/Error'

import Header from './components/Header'
import Footer from './components/Footer'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cours/:courseid" element={<Course />} />
          <Route path="/perdu" element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/perdu" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
