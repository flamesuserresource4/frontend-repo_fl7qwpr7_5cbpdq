import React from 'react'
import Spline from '@splinetool/react-spline'

const lines = [
  'Premium Hearing Care, Reimagined',
  'Crystal-clear conversations, anywhere',
  'AI-calibrated fittings tailored to you',
  'Compassionate experts you can trust'
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          {lines.map((text, idx) => (
            <h1
              key={idx}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900/90 will-change-transform"
              style={{
                animation: `fadeBlurIn 900ms ease forwards`,
                animationDelay: `${idx * 800}ms`,
                filter: 'blur(8px)',
                opacity: 0
              }}
            >
              {text}
            </h1>
          ))}

          <p
            className="mt-6 text-lg text-slate-700 max-w-xl"
            style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${lines.length * 800}ms`, filter: 'blur(8px)', opacity: 0 }}
          >
            From diagnostics to custom devices, our clinic blends human care with cutting-edge tech. Experience sound the way it was meant to be.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4"
            style={{ animation: 'fadeBlurIn 900ms ease forwards', animationDelay: `${(lines.length + 1) * 800}ms`, filter: 'blur(8px)', opacity: 0 }}
          >
            <a href="#booking" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">Book a Consultation</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-2xl border border-slate-300/70 bg-white/70 backdrop-blur px-6 py-3 font-semibold text-slate-900 shadow-sm hover:shadow-md transition">Learn More</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>
    </section>
  )
}
