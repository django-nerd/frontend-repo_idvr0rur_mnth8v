import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Star } from 'lucide-react'

export default function FooterContact() {
  return (
    <section id="contact" className="relative bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h3 className="font-serif text-3xl font-bold text-white">About Al Khanzu</h3>
            <p className="mt-4 text-emerald-100/90">
              Our mission is to cultivate a generation grounded in Qur’anic values while embracing ethical technology. We serve students, teachers, and institutions with programs that are authentic, modern, and effective.
            </p>
            <ul className="mt-6 grid gap-2 text-emerald-100/90">
              <li>• Quran memorization programs</li>
              <li>• Teacher training and mentorship</li>
              <li>• Institution and class management</li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-[#CBA135]">
              <Star className="h-5 w-5 fill-[#CBA135]" />
              <span className="text-sm">Trusted by families and institutions worldwide</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <form className="mt-4 grid gap-4">
              <input type="text" name="name" placeholder="Your Name" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-[#CBA135]" />
              <input type="email" name="email" placeholder="Email Address" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-[#CBA135]" />
              <textarea name="message" placeholder="Your Message" rows="4" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-[#CBA135]"></textarea>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#CBA135] hover:bg-[#b08e34] text-emerald-900 font-semibold px-6 py-3 transition-colors">Send Message</button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-emerald-100/90">
              <a href="mailto:info@alkhanzu.org" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4"/>info@alkhanzu.org</a>
              <a href="tel:+1000000000" className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4"/>+1 000 000 000</a>
              <a href="https://wa.me/1000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><MessageCircle className="h-4 w-4"/>WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-emerald-100/80">
          <p>© {new Date().getFullYear()} Al Khanzu. All rights reserved.</p>
          <div className="mt-3 sm:mt-0">Crafted with excellence and intention.</div>
        </div>
      </div>
    </section>
  )
}
