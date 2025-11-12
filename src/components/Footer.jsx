import React from 'react'

export default function Footer(){
  return (
    <footer className="relative mt-24 border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© 2025 Aureo Hearing Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-600 text-sm">
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
            <a href="#terms" className="hover:text-slate-900">Terms</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
