import Navbar from './Navbar'
import CouponRibbon from './CouponRibbon'
import EventDetail from './EventDetail'
import { RSVPForm } from './Forms'
import { Footer } from './Blocks'
import { useParams } from 'react-router-dom'

export default function EventPage() {
  const { slug } = useParams()
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CouponRibbon />
      <main className="pt-16">
        <EventDetail slug={slug} />
        <section className="bg-black border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <RSVPForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
