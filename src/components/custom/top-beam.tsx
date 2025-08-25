'use client'

export default function TopBeam() {
  return (
    <section >
      <div className="absolute animate-pulse top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-600 to-transparent saturate-200 opacity-40 blur-2xl"></div>
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-500 to-transparent saturate-200 opacity-40 blur-2xl"></div>
      <div className="absolute animate-pulse top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-400 to-transparent saturate-200 opacity-40 blur-2xl"></div>
      <div className="absolute  top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-main-300 to-transparent saturate-200 opacity-40 blur-2xl"></div>
    </section>
  )
}
