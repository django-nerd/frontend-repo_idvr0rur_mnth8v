import { motion } from 'framer-motion'
import { CalendarCheck, BarChart3, Award, Bell, CreditCard, LayoutDashboard } from 'lucide-react'

const features = [
  {
    id: 'attendance',
    title: 'Daily Attendance',
    desc: 'Instant, reliable digital attendance for teachers and parents.',
    icon: CalendarCheck,
  },
  {
    id: 'progress',
    title: 'Memorization & Reading Progress',
    desc: 'Clear milestones tracked and shared with visual progress.',
    icon: BarChart3,
  },
  {
    id: 'evaluation',
    title: 'Evaluation & Graduation',
    desc: 'Digital certificates and performance analytics celebrate growth.',
    icon: Award,
  },
  {
    id: 'notifications',
    title: 'Activity Notifications',
    desc: 'Event reminders and updates delivered with care.',
    icon: Bell,
  },
  {
    id: 'payments',
    title: 'Digital Payment & Financial Reports',
    desc: 'Secure payments and transparent finance tracking.',
    icon: CreditCard,
  },
  {
    id: 'dashboard',
    title: 'Teacher & Admin Dashboard',
    desc: 'A serene green-gold dashboard for complete oversight.',
    icon: LayoutDashboard,
  },
]

function ProgressBar({ value }) {
  return (
    <div className="h-2 w-full rounded-full bg-emerald-100">
      <div className="h-2 rounded-full bg-[#CBA135]" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function Features() {
  return (
    <section className="relative py-20 bg-emerald-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900">Digital Capabilities</h2>
          <p className="mt-3 text-emerald-800/80">Blending spirituality with modern technology for real impact.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, idx) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl border border-emerald-100 bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 p-3 text-emerald-900">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-emerald-900">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-emerald-800/80">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: visual mockups */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-6">
            <h4 className="font-semibold text-emerald-900">Memorization Progress (Sample)</h4>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm text-emerald-900">
                  <span>Juz' Amma</span>
                  <span>64%</span>
                </div>
                <ProgressBar value={64} />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm text-emerald-900">
                  <span>Surah Al-Baqarah</span>
                  <span>28%</span>
                </div>
                <ProgressBar value={28} />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm text-emerald-900">
                  <span>Reading Fluency</span>
                  <span>82%</span>
                </div>
                <ProgressBar value={82} />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 p-4">
                <h5 className="font-medium text-emerald-900">Digital Certificate</h5>
                <p className="text-sm text-emerald-800/80">Beautiful, shareable—with unique ID and signature.</p>
              </div>
              <div className="rounded-xl border border-emerald-100 p-4">
                <h5 className="font-medium text-emerald-900">Admin Dashboard</h5>
                <p className="text-sm text-emerald-800/80">Attendance, analytics, payments—at a glance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
