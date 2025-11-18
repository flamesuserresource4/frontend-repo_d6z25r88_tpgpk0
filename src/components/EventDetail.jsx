import { useEffect, useState } from 'react'

export default function EventDetail({ slug }) {
  const [event, setEvent] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/events`)
        const data = await res.json()
        const found = Array.isArray(data) ? data.find(e => e.slug === slug) : null
        setEvent(found || data?.[0] || null)
      } catch (e) {}
    }
    load()
  }, [slug])

  if (!event) return null

  const dt = new Date(event.date)

  return (
    <section className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-neutral-950 border border-neutral-800 p-4 aspect-[4/5]" />
        <div>
          <p className="text-red-500 uppercase tracking-widest text-xs">{event.theme || 'Theme'}</p>
          <h1 className="text-white text-3xl font-extrabold">{event.title}</h1>
          <p className="text-neutral-300 mt-2">{dt.toLocaleString(undefined,{weekday:'long', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit'})}</p>
          {event.venue_name && <p className="text-neutral-300">{event.venue_name}, {event.venue_address}</p>}
          <p className="text-neutral-300 mt-3">DJs: {event.djs?.join(', ')}</p>
          <div className="mt-6">
            <a href="#rsvp" className="inline-block px-5 py-3 bg-red-600 hover:bg-red-500 text-white uppercase tracking-wider">RSVP Table Deals</a>
          </div>
        </div>
      </div>
    </section>
  )
}
