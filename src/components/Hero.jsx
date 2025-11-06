import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const bgUrl = "https://images.unsplash.com/photo-1540593465144-7d6a46f13c07?q=80&w=1974&auto=format&fit=crop" // Makkah

export default function Hero() {
  const handleViewPackages = () => {
    const el = document.getElementById('packages')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <img src={bgUrl} alt="Makkah" className="absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(10,61,44,0.75),rgba(15,81,50,0.75))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,161,53,0.25),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Empowering a Qur’anic Generation Through Technology.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-emerald-50/90"
        >
          Al Khanzu integrates Quran memorization with modern digital tools — nurturing hearts while advancing skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-[#CBA135] hover:bg-[#b08e34] transition-colors shadow-lg"
          >
            Join Now
          </a>
          <button
            onClick={handleViewPackages}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 transition-colors"
          >
            View Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
