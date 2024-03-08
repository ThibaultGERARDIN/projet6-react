import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Home from './pages/Home'
import Error from './pages/Error'
import Fiche from './pages/Fiche'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiches-logements/:logementId" element={<Fiche />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/erreur404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
