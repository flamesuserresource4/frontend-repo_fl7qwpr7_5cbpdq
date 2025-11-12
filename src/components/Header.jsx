import React from 'react'
import { Menu, Phone, Ear, Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-white grid place-items-center">
                <Ear className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="font-semibold tracking-tight text-slate-800">
              Aureo Hearing Clinic
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#products" className="hover:text-slate-900 transition">Products</a>
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#collab" className="hover:text-slate-900 transition">Collaborators</a>
            <a href="#testimonials" className="hover:text-slate-900 transition">Testimonials</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow transition">
              <Sparkles className="h-4 w-4 text-amber-500" /> Book a Free Checkup
            </a>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <a href="tel:+1800123456" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
