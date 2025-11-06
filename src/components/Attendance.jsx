import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2, XCircle, Clock } from 'lucide-react'

export default function Attendance() {
  const statuses = [
    { label: 'Present', color: 'bg-emerald-600', icon: CheckCircle2 },
    { label: 'Absent', color: 'bg-red-500', icon: XCircle },
    { label: 'Permission', color: 'bg-amber-500', icon: Clock },
  ]

  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <section id="attendance" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-6 w-6 text-emerald-600" />
          <h2 className="font-serif text-3xl font-bold text-emerald-900">Attendance Tracker</h2>
        </div>
        <p className="mt-2 text-emerald-800/80">Track daily presence with a clean calendar view and simple status indicators.</p>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-3">
          {statuses.map(({ label, color, icon: Icon }) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1 text-sm">
              <span className={`h-3 w-3 rounded-full ${color}`} />
              <Icon className="h-4 w-4 text-emerald-700" />
              {label}
            </span>
          ))}
        </div>

        {/* Calendar grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-6 grid grid-cols-7 gap-3"
        >
          {days.map((d) => (
            <button
              key={d}
              className="group aspect-square rounded-xl border border-emerald-100 bg-emerald-50/40 p-2 text-left hover:bg-emerald-100/40 transition"
            >
              <div className="flex items-center justify-between text-xs text-emerald-700">
                <span>Day {d}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-100">
                  Present
                </span>
              </div>
              <div className="mt-3 h-6 rounded bg-white/60 border border-emerald-100" />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
