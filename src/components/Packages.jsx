import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Basic',
    price: '$19/mo',
    features: [
      'Weekly memorization tracking',
      'Daily attendance',
      'Parent notifications',
    ],
  },
  {
    name: 'Premium',
    price: '$39/mo',
    popular: true,
    features: [
      'All Basic features',
      'Advanced progress analytics',
      'Digital certificates',
      'Priority support',
    ],
  },
  {
    name: 'Family',
    price: '$79/mo',
    features: [
      'Up to 5 students',
      'Shared family dashboard',
      'Consolidated reports',
    ],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900">Packages</h2>
          <p className="mt-3 text-emerald-800/80">Choose a plan that fits your journey.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.08 }}
              className={`rounded-2xl border ${p.popular ? 'border-[#CBA135] shadow-[0_10px_40px_-10px_rgba(203,161,53,0.35)]' : 'border-emerald-100'} bg-white p-6`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-emerald-900">{p.name}</h3>
                {p.popular && (
                  <span className="text-xs tracking-wide rounded-full bg-[#CBA135]/10 text-[#8E6E19] px-3 py-1">Popular</span>
                )}
              </div>
              <div className="mt-4 text-3xl font-bold text-emerald-900">{p.price}</div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-emerald-800/90">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#CBA135]"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-900 text-white hover:bg-emerald-800 py-3 font-semibold transition-colors"
              >
                Select Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
