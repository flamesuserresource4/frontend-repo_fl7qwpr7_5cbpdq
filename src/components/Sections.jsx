import React from 'react'
import { Star, HeartPulse, ShieldCheck, Sparkles, Waves, Users, HandHeart, Headphones, ShoppingBag } from 'lucide-react'

export function About() {
  const lines = [
    'We are an award-winning hearing clinic',
    'Evidence-based diagnostics and care',
    'Personalized fittings and continuous support',
  ]
  return (
    <section id="about" className="relative py-24">
      <BentoBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {lines.map((t, i) => (
              <h2 key={i} className="text-3xl sm:text-4xl font-bold text-slate-900/90" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${i * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>{t}</h2>
            ))}
            <p className="mt-6 text-slate-700" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${lines.length * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>
              Our specialists combine compassionate care with modern audiology to restore confidence in every conversation.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: 'Certified Audiologists' },
                { icon: HeartPulse, label: 'Holistic Care Plans' },
                { icon: Waves, label: 'Tinnitus Management' },
                { icon: Users, label: 'Family-centered Support' },
              ].map(({ icon: Icon, label }, i) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur px-4 py-3 shadow-sm" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${(lines.length + 1 + i) * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>
                  <Icon className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-slate-800">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map((n, i) => (
              <div key={n} className="aspect-[4/3] rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm p-6 flex flex-col justify-between" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${(i+1) * 400}ms`, filter: 'blur(8px)', opacity: 0 }}>
                <div className="text-slate-500 text-sm">Case {n}</div>
                <div className="text-slate-900 font-semibold text-lg">Improved clarity by {15*n}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Products() {
  const items = [
    { name: 'Aura One', desc: 'Invisible canal-fit, AI noise filtering', price: '₹54,999', icon: Headphones },
    { name: 'Clarity Pro', desc: 'Rechargeable, Bluetooth LE Audio', price: '₹72,499', icon: Headphones },
    { name: 'Nova Air', desc: 'Ultra-light open-fit comfort', price: '₹63,999', icon: Headphones },
  ]
  return (
    <section id="products" className="relative py-24">
      <BentoBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900/90">Featured Products</h2>
          <a href="#shop" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">Explore All <ShoppingBag className="h-4 w-4"/></a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ name, desc, price, icon: Icon }, i) => (
            <div key={name} className="group rounded-3xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${i * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white"><Icon className="h-5 w-5"/></div>
                <div className="font-semibold text-slate-900">{name}</div>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-slate-900 font-semibold">{price}</span>
                <button className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const services = [
    { title: 'Diagnostic Audiometry', subtitle: 'Comprehensive tests' },
    { title: 'Hearing Aid Fitting', subtitle: 'AI-personalized' },
    { title: 'Tinnitus Therapy', subtitle: 'Relief & coaching' },
    { title: 'Pediatric Screening', subtitle: 'Gentle & thorough' },
  ]
  return (
    <section id="services" className="relative py-24">
      <BentoBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900/90">Services</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${i * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>
              <div className="text-slate-900 font-semibold">{s.title}</div>
              <div className="text-slate-500 text-sm">{s.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Collaborators() {
  const brands = ['Oticon', 'Phonak', 'ReSound', 'Widex', 'Starkey', 'Signia']
  return (
    <section id="collab" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(75%_50%_at_50%_-10%,rgba(124,58,237,0.15),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {brands.map((b, i) => (
            <div key={b} className="h-16 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur grid place-items-center text-slate-700 font-medium" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${i * 200}ms`, filter: 'blur(8px)', opacity: 0 }}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    { name: 'Asha', text: 'I can follow conversations with ease now. Life-changing!' },
    { name: 'Rahul', text: 'Professional, kind, and the tech is incredible.' },
    { name: 'Meera', text: 'The team listened and tailored everything perfectly.' },
  ]
  return (
    <section id="testimonials" className="relative py-24">
      <BentoBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={q.name} className="rounded-3xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${i * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                <Star className="h-4 w-4 text-amber-500" />
                <Star className="h-4 w-4 text-amber-500" />
                <Star className="h-4 w-4 text-amber-500" />
                <Star className="h-4 w-4 text-amber-500" />
              </div>
              <p className="mt-4 text-slate-700">{q.text}</p>
              <div className="mt-6 text-slate-900 font-semibold">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const tiers = [
    { name: 'Consult', price: '₹999', features: ['Full assessment', 'Report & plan'] },
    { name: 'Assist', price: '₹4,999', features: ['Fitting session', '1-month follow-up'] },
    { name: 'Care+', price: '₹14,999', features: ['Annual care', 'Unlimited tune-ups'] },
  ]
  return (
    <section id="pricing" className="relative py-24">
      <BentoBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900/90">Pricing</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={t.name} className="rounded-3xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm" style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${i * 800}ms`, filter: 'blur(8px)', opacity: 0 }}>
              <div className="text-slate-900 font-semibold text-lg">{t.name}</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{t.price}</div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-slate-900 text-white py-2 font-semibold">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <BentoBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900/90">Book a Free Checkup</h2>
            <p className="mt-4 text-slate-600">Leave your details and our team will reach out within 24 hours.</p>
            <form className="mt-6 grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3" placeholder="Full name"/>
              <input className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3" placeholder="Phone number"/>
              <input className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3" placeholder="Email (optional)"/>
              <button className="rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold">Submit</button>
            </form>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm">
            <div className="font-semibold text-slate-900">Visit Us</div>
            <p className="mt-2 text-slate-600">Aureo Hearing Clinic, 21 Wellness Ave, Bengaluru</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <div className="text-slate-500 text-sm">Hours</div>
                <div className="text-slate-900 font-medium">Mon–Sat, 9am–7pm</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <div className="text-slate-500 text-sm">Hotline</div>
                <div className="text-slate-900 font-medium">+91 80 0000 0000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BentoBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.12),rgba(0,0,0,0))]" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-amber-400/20 blur-2xl" />
    </div>
  )
}
