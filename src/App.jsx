import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import FadeSection from './components/FadeSection'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <NavBar />
      <FadeSection id="home">
        <Hero />
      </FadeSection>
    </>
  )
}

export default App
