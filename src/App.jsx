import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Products, Services, Collaborators, Testimonials, Pricing, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(100%_100%_at_0%_0%,#ffffff_0%,#f5f7ff_50%,#eef2ff_100%)] text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Collaborators />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
