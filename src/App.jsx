import Footer from './Components/Footer'

import Work from './Components/Work'

import Services from './Components/Services'

import Header from './Components/Header'

import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'

const App = () => {
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white overflow-x-hidden">
      {/* Glowing radial overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-1/3 w-[80vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl dark:opacity-40"
          style={{
            background: "radial-gradient(circle, #60a5fa 0%, #a5b4fc 60%, transparent 100%)"
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 w-[70vw] h-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl dark:opacity-30 dark:blur-3xl"
          style={{
            background: "radial-gradient(circle, #818cf8 0%, #0ea5e9 60%, transparent 100%)"
          }}
        />
      </div>
      <div className="relative z-10">
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
