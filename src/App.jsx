import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const productsRef = useRef(null)
  const featuresRef = useRef(null)
  const topRef = useRef(null)

  const products = [
    {
      name: 'Astra Mini',
      tag: 'Companion Bot',
      price: 799,
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1400&auto=format&fit=crop',
      desc: 'Tiny, friendly, and wicked smart. Ideal for kids, seniors, and curious minds.'
    },
    {
      name: 'Atlas Pro',
      tag: 'Utility Bot',
      price: 3299,
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
      desc: 'Heavy-lift helper with precision grippers and advanced pathfinding.'
    },
    {
      name: 'Lumen S1',
      tag: 'Education Bot',
      price: 1199,
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1400&auto=format&fit=crop',
      desc: 'Modular, programmable robot ready for classrooms and makerspaces.'
    },
    {
      name: 'Vigil XR',
      tag: 'Security Bot',
      price: 4999,
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
      desc: 'Autonomous patrol with 360° vision and real-time alerts.'
    }
  ]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (ref) => {
    setMobileOpen(false)
    if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-fuchsia-300 selection:text-slate-900">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-20 h-[35rem] w-[35rem] rounded-full bg-cyan-400/20 blur-3xl animate-pulse [animation-delay:400ms]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header ref={topRef} className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">NeoBots</span>
              <span className="ml-2 hidden rounded-full bg-fuchsia-500/20 px-2 py-0.5 text-xs text-fuchsia-200 ring-1 ring-inset ring-fuchsia-300/30 sm:inline">by Nova Robotics</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
              <button onClick={() => scrollTo(featuresRef)} className="hover:text-white transition-colors">Features</button>
              <button onClick={() => scrollTo(productsRef)} className="hover:text-white transition-colors">Shop</button>
              <a href="#support" onClick={(e)=>e.preventDefault()} className="hover:text-white transition-colors">Support</a>
              <a href="#docs" onClick={(e)=>e.preventDefault()} className="hover:text-white transition-colors">Docs</a>
              <a href="#login" onClick={(e)=>e.preventDefault()} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition">Sign in</a>
              <a href="#cart" onClick={(e)=>e.preventDefault()} className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Cart</a>
            </nav>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
              <span className="sr-only">Open menu</span>
              <Burger open={mobileOpen} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/70 backdrop-blur">
            <div className="space-y-1 px-4 py-4">
              <button onClick={() => scrollTo(featuresRef)} className="block w-full rounded-lg px-3 py-2 text-left hover:bg-white/10">Features</button>
              <button onClick={() => scrollTo(productsRef)} className="block w-full rounded-lg px-3 py-2 text-left hover:bg-white/10">Shop</button>
              <a href="#support" onClick={(e)=>e.preventDefault()} className="block w-full rounded-lg px-3 py-2 hover:bg-white/10">Support</a>
              <a href="#docs" onClick={(e)=>e.preventDefault()} className="block w-full rounded-lg px-3 py-2 hover:bg-white/10">Docs</a>
              <div className="flex gap-3 pt-2">
                <a href="#login" onClick={(e)=>e.preventDefault()} className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center">Sign in</a>
                <a href="#cart" onClick={(e)=>e.preventDefault()} className="flex-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-center font-medium text-slate-900">Cart</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-24 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28 lg:px-8">
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <Sparkles className="text-fuchsia-300" /> New drop: Lumen S1 Kit
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Robots that feel like magic.
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              From playful companions to powerful assistants, NeoBots brings premium robotics to your home, classroom, and lab. Touch, code, explore — your next idea is one charge away.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button onClick={() => scrollTo(productsRef)} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-xl shadow-fuchsia-500/20 hover:opacity-95 transition">
                Shop robots <ArrowRight />
              </button>
              <a href="https://my.spline.design/magicpotionbreakdownvideo-lJeP6eeKsLVq4Dtmndjpzwld/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition">
                Watch demo <Play />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2"><Shield /> 2-year warranty</div>
              <div className="flex items-center gap-2"><Bolt /> Fast shipping</div>
              <div className="flex items-center gap-2"><Heart /> Loved by 20k+</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
              <iframe
                title="Spline Hero"
                src="https://my.spline.design/magicpotionbreakdownvideo-lJeP6eeKsLVq4Dtmndjpzwld/"
                className="h-full w-full"
                style={{ border: '0' }}
                allow="accelerometer; camera; gyroscope; magnetometer; microphone; xr-spatial-tracking; clipboard-read; clipboard-write"
              />
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 animate-bounce rounded-xl bg-fuchsia-400/30 blur-xl md:block" />
            <div className="pointer-events-none absolute -left-8 bottom-10 hidden h-16 w-16 animate-pulse rounded-full bg-cyan-300/30 blur-lg md:block" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Built for wonder. Engineered for work.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">Every NeoBot blends robust hardware, safety-first design, and delightful software.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<Cpu />} title="Edge AI" text="On-device vision and speech — privacy intact, latency near-zero."/>
            <FeatureCard icon={<Arm />} title="Precision Motion" text="Servo arrays with micron-level accuracy for smooth actuation."/>
            <FeatureCard icon={<Battery />} title="All-day Power" text="High-density cells with smart thermal regulation and USB‑C PD."/>
            <FeatureCard icon={<Blocks />} title="Modular" text="Snap-on sensors and tools. Upgrade as your ideas grow."/>
          </div>
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Shop robots</h2>
              <p className="mt-2 text-slate-300">Curated lineup for home, education, and pro workflows.</p>
            </div>
            <button onClick={() => alert('This is a demo store. Checkout coming soon!')} className="hidden rounded-full bg-white/10 px-5 py-2 text-sm hover:bg-white/15 transition md:block">View all</button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/10">
                <div className="relative">
                  <img src={p.img} alt={p.name} className="h-48 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-fuchsia-500/90 px-2 py-0.5 text-xs font-semibold text-slate-900">{p.tag}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-xs">${p.price.toLocaleString()}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-300">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => alert('Added to cart')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-slate-900">
                      Add to cart <Cart />
                    </button>
                    <button onClick={() => alert('Quick view coming soon')} className="text-sm text-slate-300 hover:text-white">Quick view</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Testimonial
              quote="The Astra Mini actually got my students excited about coding again. It’s like having a lab assistant that jokes back."
              author="Maya L."
              title="STEM Teacher"
            />
            <Testimonial
              quote="We deployed two Vigil XR units across our warehouse. Zero blind spots, instant alerts — game changer."
              author="Jared P."
              title="Ops Manager"
            />
            <Testimonial
              quote="I’ve built three projects on Lumen S1 in a week. The SDK is so clean, it’s almost not fair."
              author="Ivy K."
              title="Robotics Researcher"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-indigo-500/10 to-cyan-400/15 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">Bring a NeoBot home today</h3>
                <p className="mt-2 max-w-2xl text-slate-200">Free shipping, 30‑day returns, and intuitive apps on iOS, Android, and Web. Start building the future — from your desk.</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <button onClick={() => scrollTo(productsRef)} className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:opacity-95 transition">
                  Shop now <ArrowRightDark />
                </button>
                <button onClick={() => window.open('mailto:hello@neobots.ai?subject=Talk%20to%20sales', '_blank')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                  Talk to sales <Chat />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <Logo small />
              <span className="text-sm text-slate-300">© {new Date().getFullYear()} NeoBots, Inc. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <a href="#privacy" onClick={(e)=>e.preventDefault()} className="hover:text-white">Privacy</a>
              <a href="#terms" onClick={(e)=>e.preventDefault()} className="hover:text-white">Terms</a>
              <a href="#status" onClick={(e)=>e.preventDefault()} className="hover:text-white">Status</a>
              <a href="#x" onClick={(e)=>e.preventDefault()} className="hover:text-white">@neobots</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 ring-1 ring-inset ring-white/20">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-300">{text}</p>
    </div>
  )
}

function Testimonial({ quote, author, title }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-400/10 blur-2xl" />
      <blockquote className="text-slate-200">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-slate-300">— {author}, {title}</figcaption>
    </figure>
  )
}

function Logo({ small }) {
  return (
    <div className={`relative inline-flex items-center ${small ? 'scale-90' : ''}`}>
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0abfc"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
        </defs>
        <rect x="6" y="10" width="36" height="24" rx="6" fill="url(#g1)"/>
        <circle cx="24" cy="22" r="5" fill="#0f172a"/>
        <rect x="14" y="36" width="20" height="4" rx="2" fill="#22d3ee"/>
        <rect x="23" y="6" width="2" height="6" rx="1" fill="#f0abfc"/>
      </svg>
    </div>
  )
}

function Burger({ open }) {
  return (
    <div className="relative h-5 w-6">
      <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? 'top-2.5 rotate-45' : 'top-1'}`}/>
      <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : 'top-2.5 opacity-100'}`}/>
      <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? 'top-2.5 -rotate-45' : 'top-4'}`}/>
    </div>
  )
}

// Icons
function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}
function ArrowRightDark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}
function Play() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7-11-7z"/>
    </svg>
  )
}
function Shield() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function Bolt() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>
    </svg>
  )
}
function Heart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}
function Cpu() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
    </svg>
  )
}
function Arm() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 12h4l3-3 4 4 3-3"/>
      <circle cx="6" cy="12" r="2"/>
      <path d="M2 22h20"/>
    </svg>
  )
}
function Battery() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 13v-2"/><rect x="3" y="8" width="10" height="8" fill="currentColor" className="text-fuchsia-300"/>
    </svg>
  )
}
function Blocks() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )
}
function Cart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}
function Chat() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10z"/>
    </svg>
  )
}
function Sparkles({ className }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zm12 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/>
    </svg>
  )
}
