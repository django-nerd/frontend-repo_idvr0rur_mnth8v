import { motion } from 'framer-motion'
import { GraduationCap, FileDown, BadgeCheck, CreditCard, PieChart, BarChart3, Users, Settings } from 'lucide-react'

export default function ResultsFinanceDashboard() {
  return (
    <section id="dashboard" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Evaluation & Graduation */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-emerald-600" />
              <h3 className="font-serif text-2xl font-bold text-emerald-900">Evaluation & Graduation</h3>
            </div>
            <p className="mt-2 text-emerald-800/80">Grades, teacher comments, and graduation eligibility with downloadable certificates.</p>

            <div className="mt-6 space-y-4">
              {[{ name: 'Aisha', grade: 'A', eligible: true }, { name: 'Omar', grade: 'B+', eligible: true }, { name: 'Zainab', grade: 'A-', eligible: false }].map((s) => (
                <div key={s.name} className="rounded-xl border border-emerald-100 bg-white p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-emerald-700">Student</div>
                    <div className="font-semibold text-emerald-900">{s.name}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-sm font-medium text-emerald-800">Grade {s.grade}</span>
                    {s.eligible ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700"><BadgeCheck className="h-4 w-4" /> Eligible</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-700"><Settings className="h-4 w-4" /> In Progress</span>
                    )}
                    <button className="inline-flex items-center gap-1 rounded-full border border-emerald-200 px-3 py-1 text-sm hover:bg-white">
                      <FileDown className="h-4 w-4" /> Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment & Financials */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-6">
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-emerald-600" />
              <h3 className="font-serif text-2xl font-bold text-emerald-900">Digital Payment</h3>
            </div>
            <p className="mt-2 text-emerald-800/80">Pay tuition or donate through bank transfers and e-wallet partners.</p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {['Bank Transfer', 'E-Wallet', 'Credit/Debit', 'Cash Office'].map((m) => (
                <button key={m} className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-3 text-left hover:bg-emerald-100/40">
                  {m}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
              <div className="flex items-center gap-2 text-emerald-700 font-medium"><PieChart className="h-4 w-4" /> Monthly Breakdown</div>
              <div className="mt-3 h-32 rounded bg-white border border-emerald-100" />
            </div>
          </div>

          {/* Teacher & Admin Dashboard */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-emerald-600" />
              <h3 className="font-serif text-2xl font-bold text-emerald-900">Dashboard</h3>
            </div>
            <p className="mt-2 text-emerald-800/80">Quick glance for teachers and admins—attendance, progress, and payments.</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[{ label: 'Students', value: '126', icon: Users }, { label: 'Classes', value: '12', icon: Settings }, { label: 'Attendance', value: '96%', icon: BarChart3 }, { label: 'Payments', value: '92%', icon: CreditCard }].map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-xs text-emerald-700">{label}</div>
                    <div className="text-lg font-semibold text-emerald-900">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
