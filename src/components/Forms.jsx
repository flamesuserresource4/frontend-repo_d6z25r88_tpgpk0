import { useState } from 'react'

export function MembershipForm() {
  const [form, setForm] = useState({ email: '', phone: '', ig_handle: '', first_name: '', last_name: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setStatus({ state: 'error', message: 'Please enter a valid email.' })
      return
    }
    try {
      const res = await fetch(`${baseUrl}/api/membership/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          phone: form.phone || undefined,
          ig_handle: form.ig_handle || undefined,
          first_name: form.first_name || undefined,
          last_name: form.last_name || undefined,
        }),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ state: 'success', message: 'Welcome to the movement. You\'re in.' })
        setForm({ email: '', phone: '', ig_handle: '', first_name: '', last_name: '' })
      } else {
        throw new Error(data.detail || 'Signup failed')
      }
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <div id="join" className="bg-neutral-950 border border-neutral-800 p-6">
      <h3 className="text-white text-2xl font-extrabold">Join Membership</h3>
      <p className="mt-2 text-neutral-300 text-sm">Unlock 2–4–1 specials, priority RSVP, and member-only drops.</p>
      <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
        <input name="email" type="email" placeholder="Email*" value={form.email} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" required />
        <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <input name="first_name" type="text" placeholder="First name" value={form.first_name} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <input name="last_name" type="text" placeholder="Last name" value={form.last_name} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <input name="ig_handle" type="text" placeholder="Instagram (optional)" value={form.ig_handle} onChange={onChange} className="sm:col-span-2 bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <button type="submit" disabled={status.state==='loading'} className="sm:col-span-2 inline-flex items-center justify-center px-5 py-3 bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white font-semibold uppercase tracking-wider transition">
          {status.state==='loading' ? 'Joining…' : 'Join Now'}
        </button>
        {status.state==='success' && <p className="sm:col-span-2 text-green-400 text-sm">{status.message}</p>}
        {status.state==='error' && <p className="sm:col-span-2 text-red-400 text-sm">{status.message}</p>}
      </form>
    </div>
  )
}

export function RSVPForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: 'Special', group_size: 2, bottle_choice: '', notes: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    if (!form.name || !form.email) {
      setStatus({ state: 'error', message: 'Name and valid email are required.' })
      return
    }
    try {
      const res = await fetch(`${baseUrl}/api/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          package: form.package,
          group_size: Number(form.group_size) || 2,
          bottle_choice: form.bottle_choice || undefined,
          notes: form.notes || undefined,
        }),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ state: 'success', message: 'RSVP received. We\'ll confirm shortly.' })
        setForm({ name: '', email: '', phone: '', package: 'Special', group_size: 2, bottle_choice: '', notes: '' })
      } else {
        throw new Error(data.detail || 'RSVP failed')
      }
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <div id="rsvp" className="bg-neutral-950 border border-neutral-800 p-6">
      <h3 className="text-white text-2xl font-extrabold">RSVP Table Deals</h3>
      <p className="mt-2 text-neutral-300 text-sm">Book Special, VIP, or Mogul packages. We\'ll reach out to confirm.
      </p>
      <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Full name*" value={form.name} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" required />
        <input name="email" type="email" placeholder="Email*" value={form.email} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" required />
        <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <select name="package" value={form.package} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-red-600">
          <option>Special</option>
          <option>VIP</option>
          <option>Mogul</option>
        </select>
        <input name="group_size" type="number" min="1" max="20" placeholder="Group size" value={form.group_size} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <input name="bottle_choice" type="text" placeholder="Bottle choice (optional)" value={form.bottle_choice} onChange={onChange} className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <textarea name="notes" placeholder="Notes (celebrations, seating, etc.)" value={form.notes} onChange={onChange} className="sm:col-span-2 bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
        <button type="submit" disabled={status.state==='loading'} className="sm:col-span-2 inline-flex items-center justify-center px-5 py-3 bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white font-semibold uppercase tracking-wider transition">
          {status.state==='loading' ? 'Submitting…' : 'Request RSVP'}
        </button>
        {status.state==='success' && <p className="sm:col-span-2 text-green-400 text-sm">{status.message}</p>}
        {status.state==='error' && <p className="sm:col-span-2 text-red-400 text-sm">{status.message}</p>}
      </form>
    </div>
  )
}
