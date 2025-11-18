import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThisWeek from './components/ThisWeek'
import { MembershipTeaser, MixtapePreview, GalleryStrip, ArticlesBlock, Footer } from './components/Blocks'
import { MembershipForm, RSVPForm } from './components/Forms'
import CouponRibbon from './components/CouponRibbon'
import AdminVerify from './components/AdminVerify'
import './index.css'

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
        <MembershipTeaser />
        <MixtapePreview />
        <GalleryStrip />
        <ArticlesBlock />
        <AdminVerify />
      </main>
      <Footer />
    </div>
  )
}

export default App
