import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import FadeSection from './components/FadeSection'

function App() {
  return (
    <>
      <NavBar />
      <FadeSection id="home">
        <section id="home" className="hero flex flex-col items-center justify-center h-screen">
          <div className='flex flex-row items-center justify-center p-4'>
            <img src={viteLogo} alt="vite logo" className="w-32" />
            <img src={reactLogo} alt="react logo" className="w-32 animate-spin" />
          </div>
          <h1 className="text-4xl font-bold text-center">
            Welcome to <span className="text-blue-500">Vite</span> +{' '}
            <span className="text-blue-500">React</span>!
          </h1>
          <p className="text-lg mt-4">
            Get started by editing <code>App.jsx</code>
          </p>
        </section>
      </FadeSection>
    </>
  )
}

export default App
