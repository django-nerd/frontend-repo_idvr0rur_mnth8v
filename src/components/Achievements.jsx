import { motion } from 'framer-motion'
import { Trophy, BookOpenCheck, Quote } from 'lucide-react'

export default function Achievements() {
  const students = [
    { name: 'Aisha', tilawah: 70, tahfidz: 45 },
    { name: 'Omar', tilawah: 55, tahfidz: 60 },
    { name: 'Zainab', tilawah: 85, tahfidz: 75 },
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-emerald-50/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6 text-emerald-600" />
          <h2 className="font-serif text-3xl font-bold text-emerald-900">Quran Reading & Memorization</h2>
        </div>
        <p className="mt-2 text-emerald-800/80">Track tilawah and tahfidz with clear charts and motivating messages.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {students.map((s) => (
            <div key={s.name} className="rounded-2xl border border-emerald-100 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-emerald-700">Student</div>
                  <div className="font-semibold text-emerald-900">{s.name}</div>
                </div>
                <BookOpenCheck className="h-6 w-6 text-emerald-600" />
              </div>

              <div className="mt-5">
                <div className="text-sm font-medium text-emerald-900">Tilawah</div>
                <div className="mt-2 h-2 rounded-full bg-emerald-100">
                  <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${s.tilawah}%` }} />
                </div>
                <div className="mt-1 text-xs text-emerald-700">{s.tilawah}%</div>
              </div>

              <div className="mt-4">
                <div className="text-sm font-medium text-emerald-900">Tahfidz</div>
                <div className="mt-2 h-2 rounded-full bg-emerald-100">
                  <div className="h-2 rounded-full bg-[#CBA135]" style={{ width: `${s.tahfidz}%` }} />
                </div>
                <div className="mt-1 text-xs text-emerald-700">{s.tahfidz}%</div>
              </div>
            </div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-emerald-100 bg-white p-6 flex items-start gap-3"
        >
          <Quote className="h-5 w-5 text-emerald-600 shrink-0" />
          <p className="text-emerald-900">
            The best of you are those who learn the Qur'an and teach it. — Hadith (Bukhari)
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
