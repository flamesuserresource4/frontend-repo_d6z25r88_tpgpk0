export function MembershipTeaser() {
  return (
    <section id="membership" className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-neutral-950 border border-neutral-800 p-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_40%)]" />
          <h3 className="text-white text-3xl font-extrabold">Unlock 2–4–1 Access + Exclusive Perks</h3>
          <p className="mt-3 text-neutral-300">Members get weekly specials, priority RSVP, and access to the Music Identity layer.</p>
          <a href="#join" className="inline-block mt-6 px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold uppercase tracking-wider">Join Membership</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-neutral-950 border border-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function MixtapePreview() {
  return (
    <section id="music" className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Mixtape Hub</h2>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm uppercase tracking-wider">View All</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-4">
              <div className="aspect-square bg-neutral-900 border border-neutral-800" />
              <div className="mt-3">
                <p className="text-neutral-300 text-xs uppercase">DJ Name</p>
                <h4 className="text-white font-bold">Mixtape Title {i+1}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GalleryStrip() {
  return (
    <section id="galleries" className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Photos</h2>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm uppercase tracking-wider">See Galleries</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-neutral-950 border border-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArticlesBlock() {
  return (
    <section id="articles" className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Articles & Features</h2>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm uppercase tracking-wider">View All</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-5">
              <div className="aspect-video bg-neutral-900 border border-neutral-800" />
              <h4 className="mt-3 text-white font-bold">Feature Headline {i+1}</h4>
              <p className="text-neutral-400 text-sm">Short description of the story.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="text-white font-extrabold tracking-tight">ILHH<span className="text-red-500">.JA</span></div>
          <div className="text-neutral-400 text-sm">Every Thursday • Kingston, JA • Contact: info@ilhhja.com</div>
          <div className="flex items-center gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 w-16 bg-neutral-800" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
