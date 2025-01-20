import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Course from './pages/Course'
import Courses from './pages/Courses'
import Parcours from './pages/Parcours'
import Error from './pages/Error404'

import Header from './components/Header'
import Footer from './components/Footer'


import './index.css'

const navLink = [
  { name: 'Accueil', href: '/altitude/' },
  { name: 'Formations', href: '/altitude/formations/' },
  { name: 'A Propos', href: '/altitude/a-propos' },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <Header navLink={navLink}/>
      <main>
        <Routes>
          <Route exact path="/altitude/" element={<Home />} />
          <Route path="/altitude/formations/" element={<Courses />} />
          <Route path="/altitude/cours/:id" element={<Course />} />
          <Route path="/altitude/parcours/:id" element={<Parcours />} />
          <Route path="/altitude/perdu" element={<Error type="default"/>} />
          <Route
            path="*"
            element={<Navigate to="/altitude/perdu" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
