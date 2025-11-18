import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Membership', href: '#membership' },
  { label: 'RSVP / Table Deals', href: '#rsvp' },
  { label: 'Events Calendar', href: '#events' },
  { label: 'Articles & Features', href: '#articles' },
  { label: 'Community Profiles', href: '#community' },
  { label: 'Music', href: '#music' },
  { label: 'Galleries', href: '#galleries' },
  { label: 'Store', href: 'https://example.com', external: true },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-extrabold tracking-tight text-lg">
          <span className="text-white">ILHH</span>
          <span className="text-red-500">.JA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-sm text-neutral-200 hover:text-white transition">
                {item.label}
              </a>
            ) : (
              <a key={item.label} href={item.href} className="text-sm text-neutral-200 hover:text-white transition">
                {item.label}
              </a>
            )
          ))}
          <a href="#login" className="ml-4 text-sm text-neutral-300 hover:text-white">Login</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black/90">
          <div className="px-4 py-3 grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="py-2 text-neutral-200 hover:text-white">
                  {item.label}
                </a>
              ) : (
                <a key={item.label} href={item.href} className="py-2 text-neutral-200 hover:text-white">
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
