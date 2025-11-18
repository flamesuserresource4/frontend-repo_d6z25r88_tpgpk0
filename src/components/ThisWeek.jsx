export default function ThisWeek() {
  return (
    <section id="events" className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">This Week’s Energy</h2>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm uppercase tracking-wider">See Event Details</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="relative bg-neutral-950 border border-red-600/40 p-4 sm:p-6 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.25),transparent_40%)]" />
            <div className="relative grid grid-cols-3 gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-neutral-900 border border-neutral-800" />
              ))}
            </div>
            <div className="absolute inset-0 border border-red-600/30" />
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col">
            <div>
              <p className="text-red-500 uppercase tracking-widest text-xs">Theme</p>
              <h3 className="mt-2 text-white text-3xl font-extrabold">90s vs 2000s: Throwback Anthems</h3>
              <p className="mt-3 text-neutral-300">DJs: Chromatic, Bishop Escobar, CopperShot, ZJ Liquid</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['#hiphop', '#dancehall', '#club', '#throwback'].map(t => (
                  <span key={t} className="text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-8">
              <a href="#rsvp" className="inline-block px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold uppercase tracking-wider transition">RSVP Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
