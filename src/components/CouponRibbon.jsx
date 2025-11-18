import { useEffect, useState } from 'react'

export default function CouponRibbon() {
  const [coupon, setCoupon] = useState(null)
  const [now, setNow] = useState(Date.now())
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/coupons?active_only=true`)
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) setCoupon(data[0])
      } catch (e) {}
    }
    load()
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  if (!coupon) return null

  const end = new Date(coupon.ends_at).getTime()
  const diff = Math.max(0, end - now)
  const hh = Math.floor(diff / 1000 / 3600)
  const mm = Math.floor((diff / 1000 % 3600) / 60)
  const ss = Math.floor(diff / 1000 % 60)

  return (
    <div className="bg-red-600 text-white text-center py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <span className="uppercase tracking-widest text-xs">{coupon.title}</span>
        <span className="font-mono text-sm bg-black/30 px-2 py-0.5 rounded">{String(hh).padStart(2,'0')}:{String(mm).padStart(2,'0')}:{String(ss).padStart(2,'0')}</span>
      </div>
    </div>
  )
}
