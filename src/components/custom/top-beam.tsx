'use client'

export default function TopBeam() {
  return (
    <section className="z-0">
      <div className="absolute animate-pulse  left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-600 to-transparent saturate-200 opacity-40 blur-2xl"></div>
      <div className="absolute  left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-500 to-transparent saturate-200 opacity-40 blur-2xl"></div>
      <div className="absolute animate-pulse  left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-400 to-transparent saturate-200 opacity-40 blur-2xl"></div>
      <div className="absolute   left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-300 to-transparent saturate-200 opacity-40 blur-2xl"></div>
    </section>
  )
}
