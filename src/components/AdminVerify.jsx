import { useState } from 'react'

export default function AdminVerify() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const verify = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${baseUrl}/api/coupons/verify?code=${encodeURIComponent(code)}`)
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ ok: false, reason: e.message })
    }
  }

  return (
    <section className="bg-black border-t border-neutral-900" id="verify">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-white text-xl font-bold mb-4">Staff: Verify Coupon</h3>
        <form onSubmit={verify} className="flex items-center gap-3">
          <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder="Enter code (e.g. ILHH-HH)" className="bg-black border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-600" />
          <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white uppercase tracking-wider">Check</button>
        </form>
        {result && (
          <div className="mt-4 text-sm text-neutral-200">
            <p>Status: {result.ok ? 'Active ✅' : 'Not Active ❌'}</p>
            {result.reason && <p>Reason: {result.reason}</p>}
            {result.starts_at && <p>Starts: {new Date(result.starts_at).toLocaleString()}</p>}
            {result.ends_at && <p>Ends: {new Date(result.ends_at).toLocaleString()}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
