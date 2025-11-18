import { useEffect, useMemo, useState } from 'react'

function startOfMonth(date){ const d = new Date(date); d.setDate(1); d.setHours(0,0,0,0); return d }
function endOfMonth(date){ const d = new Date(date); d.setMonth(d.getMonth()+1); d.setDate(0); d.setHours(23,59,59,999); return d }
function addDays(date, n){ const d=new Date(date); d.setDate(d.getDate()+n); return d }

export default function Calendar() {
  const [events, setEvents] = useState([])
  const [current, setCurrent] = useState(new Date())
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/events`)
        const data = await res.json()
        setEvents(Array.isArray(data) ? data : [])
      } catch (e) {}
    }
    load()
  }, [])

  const monthDays = useMemo(() => {
    const start = startOfMonth(current)
    const end = endOfMonth(current)
    const days = []
    const startWeekday = (start.getDay()+6)%7 // Monday as 0
    for (let i=0;i<startWeekday;i++) days.push(null)
    for (let d=new Date(start); d<=end; d=addDays(d,1)) days.push(new Date(d))
    return days
  }, [current])

  const eventsByDate = useMemo(() => {
    const map = {}
    for (const e of events) {
      const dayKey = new Date(e.date).toDateString()
      if (!map[dayKey]) map[dayKey] = []
      map[dayKey].push(e)
    }
    return map
  }, [events])

  const monthLabel = current.toLocaleString(undefined, { month: 'long', year: 'numeric' })

  return (
    <section className="bg-black border-t border-neutral-900" id="calendar">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-extrabold">Events Calendar</h2>
          <div className="flex items-center gap-2">
            <button onClick={()=>setCurrent(addDays(startOfMonth(current), -1))} className="px-3 py-1 border border-neutral-700 text-white">Prev</button>
            <div className="text-neutral-300 text-sm px-2">{monthLabel}</div>
            <button onClick={()=>setCurrent(addDays(endOfMonth(current), 1))} className="px-3 py-1 border border-neutral-700 text-white">Next</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-xs text-neutral-400 mb-2">
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d} className="text-center">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {monthDays.map((d,i) => (
            <div key={i} className="min-h-[90px] bg-neutral-950 border border-neutral-800 p-2">
              {d && <div className="text-neutral-400 text-xs">{d.getDate()}</div>}
              {d && (eventsByDate[d.toDateString()]||[]).slice(0,3).map((e,idx)=>(
                <div key={idx} className="mt-1 text-[11px] px-2 py-1 bg-red-600/20 border border-red-600/30 text-red-300 truncate">{e.theme || e.title}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
