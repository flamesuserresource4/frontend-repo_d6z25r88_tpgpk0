import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThisWeek from './components/ThisWeek'
import { MembershipTeaser, MixtapePreview, GalleryStrip, ArticlesBlock, Footer } from './components/Blocks'
import { MembershipForm, RSVPForm } from './components/Forms'
import CouponRibbon from './components/CouponRibbon'
import AdminVerify from './components/AdminVerify'
import Calendar from './components/Calendar'
import './index.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CouponRibbon />
      <main className="pt-16">
        <Hero />
        <ThisWeek />
        <section className="bg-black border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
            <MembershipForm />
            <RSVPForm />
          </div>
        </section>
        <Calendar />
        <MembershipTeaser />
        <MixtapePreview />
        <GalleryStrip />
        <section id="articles" className="bg-black border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Articles & Features</h2>
              <Link to="/articles" className="text-red-500 hover:text-red-400 text-sm uppercase tracking-wider">View All</Link>
            </div>
            <ArticlesBlock />
          </div>
        </section>
        <AdminVerify />
      </main>
      <Footer />
    </div>
  )
}

export default App
