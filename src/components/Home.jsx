import { motion } from 'framer-motion'
import { ArrowRight, Book, Star, Phone, Mail, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <section id="home" className="relative">
      {/* Hero */}
      <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-700 backdrop-blur">
              <span className="text-sm font-medium">Al Khanzu</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#CBA135]" />
              <span className="text-xs">Quran Learning & Student Management</span>
            </div>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 leading-tight">
              Empowering Quran Education with Elegance and Clarity
            </h1>
            <p className="mt-4 text-emerald-800/80 text-lg">
              A modern platform to manage attendance, track memorization, evaluate progress, and handle payments—tailored for Islamic schools and programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#attendance" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-medium shadow-sm">
                Explore Attendance
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#dashboard" className="inline-flex items-center gap-2 rounded-full bg-[#CBA135] hover:bg-[#b08e34] text-emerald-900 px-5 py-3 font-semibold shadow-sm">
                View Dashboard
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Programs Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Book,
                title: 'Quran Memorization',
                desc: 'Structured tahfidz with levels, targets, and ijazah pathway.'
              },
              {
                icon: Star,
                title: 'Reading Improvement',
                desc: 'Tilawah and tajwid practice with audio and teacher feedback.'
              },
              {
                icon: MessageCircle,
                title: 'Islamic Studies',
                desc: 'Akhlaq, fiqh, and adab modules with quizzes and reflections.'
              }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <Icon className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-4 font-semibold text-emerald-900">{title}</h3>
                <p className="mt-1 text-sm text-emerald-800/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-emerald-50/40">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-bold text-emerald-900">Trusted by students, parents, and teachers</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: 'Ahmad — Student',
                quote: 'Clear targets and reminders helped me memorize consistently.'
              },
              {
                name: 'Fatimah — Parent',
                quote: 'I can see real progress and attendance—peace of mind!'
              },
              {
                name: 'Ustadh Kareem — Teacher',
                quote: 'Recording evaluations is fast, so I focus more on teaching.'
              }
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-emerald-100 bg-white p-6">
                <p className="text-emerald-900">“{t.quote}”</p>
                <div className="mt-3 text-sm font-medium text-emerald-700">{t.name}</div>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a href="tel:+1234567890" className="rounded-xl border border-emerald-100 bg-white p-4 flex items-center gap-3 hover:shadow-sm">
              <Phone className="h-5 w-5 text-emerald-600" />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>
            <a href="mailto:contact@alkhanzu.org" className="rounded-xl border border-emerald-100 bg-white p-4 flex items-center gap-3 hover:shadow-sm">
              <Mail className="h-5 w-5 text-emerald-600" />
              <span className="text-sm">contact@alkhanzu.org</span>
            </a>
            <a href="#dashboard" className="rounded-xl border border-emerald-100 bg-white p-4 flex items-center gap-3 hover:shadow-sm">
              <ArrowRight className="h-5 w-5 text-emerald-600" />
              <span className="text-sm">See the live dashboard preview</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
