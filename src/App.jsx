import { useEffect } from 'react'
import Home from './components/Home'
import Attendance from './components/Attendance'
import Achievements from './components/Achievements'
import ResultsFinanceDashboard from './components/ResultsFinanceDashboard'

function App() {
  useEffect(() => {
    const handleHash = (e) => {
      const href = e.target.getAttribute?.('href')
      if (!href || !href.startsWith('#')) return
      const el = document.querySelector(href)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleHash)
    return () => document.removeEventListener('click', handleHash)
  }, [])

  return (
    <div className="min-h-screen bg-white text-emerald-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-serif text-xl font-bold text-emerald-900">Al Khanzu</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-800/80">
            <a href="#attendance" className="hover:text-emerald-900">Attendance</a>
            <a href="#achievements" className="hover:text-emerald-900">Achievements</a>
            <a href="#dashboard" className="hover:text-emerald-900">Dashboard</a>
          </nav>
          <a href="#dashboard" className="inline-flex items-center rounded-full bg-[#CBA135] hover:bg-[#b08e34] text-emerald-900 font-semibold px-4 py-2 text-sm">Get Started</a>
        </div>
      </header>

      <main>
        <Home />
        <Attendance />
        <Achievements />
        <ResultsFinanceDashboard />

        {/* Footer */}
        <footer className="py-12 bg-emerald-50/40 border-t border-emerald-100">
          <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-emerald-700">© {new Date().getFullYear()} Al Khanzu. All rights reserved.</div>
            <div className="text-sm text-emerald-700">Designed with care for Quran learners and educators.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
