import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay with brand copy */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="max-w-3xl">
            <p className="text-neutral-300 uppercase tracking-[0.25em] text-xs mb-4">Every Thursday</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              The Original Thursday Night Hip Hop Experience
            </h1>
            <p className="mt-6 text-neutral-200 max-w-2xl">
              Premium nightlife meets street culture. Join the movement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#membership" className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold uppercase tracking-wider transition shadow-[0_0_20px_rgba(255,0,0,0.35)]">
                Join Membership
              </a>
              <a href="#rsvp" className="px-6 py-3 border border-neutral-700 text-white hover:border-white transition">
                RSVP Table Deals
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient veil to keep Spline interactive and visible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </section>
  )
}
