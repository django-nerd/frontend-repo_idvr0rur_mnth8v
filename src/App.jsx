import Hero from './components/Hero'
import Packages from './components/Packages'
import Features from './components/Features'
import FooterContact from './components/FooterContact'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold text-emerald-900">Al Khanzu</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-800/80">
            <a href="#packages" className="hover:text-emerald-900">Packages</a>
            <a href="#contact" className="hover:text-emerald-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-[#CBA135] hover:bg-[#b08e34] text-emerald-900 font-semibold px-4 py-2 text-sm">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <Packages />
        <Features />

        {/* Services & Testimonials */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-3xl font-bold">Our Services</h3>
              <ul className="mt-6 space-y-3 text-emerald-800/90">
                <li>• Quran memorization and reading programs</li>
                <li>• Teacher training and professional development</li>
                <li>• Institution management and digital transformation</li>
              </ul>
              <div className="mt-8 rounded-2xl border border-emerald-100 p-6">
                <h4 className="font-semibold">Teacher & Admin Dashboard</h4>
                <p className="text-emerald-800/80 mt-2">Elegant green-and-gold UI for classes, attendance, progress, and finance—all in one place.</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold">Testimonials</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[{
                  name: 'Ahmad, Student',
                  text: 'I memorized faster with clear goals and gentle reminders.',
                  img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop'
                }, {
                  name: 'Fatimah, Parent',
                  text: 'The dashboard keeps me informed and confident in my child’s progress.',
                  img: 'https://images.unsplash.com/photo-1544005316-04ce1f1a91f6?q=80&w=1000&auto=format&fit=crop'
                }, {
                  name: 'Ustadh Kareem, Teacher',
                  text: 'Attendance and reports are effortless—more time to teach.',
                  img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1000&auto=format&fit=crop'
                }].map((t) => (
                  <div key={t.name} className="rounded-2xl border border-emerald-100 p-5 bg-emerald-50/30">
                    <div className="flex items-center gap-3">
                      <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                      <div className="font-semibold text-emerald-900">{t.name}</div>
                    </div>
                    <p className="mt-3 text-emerald-800/80 text-sm">“{t.text}”</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FooterContact />
      </main>
    </div>
  )
}

export default App
