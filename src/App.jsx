import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThisWeek from './components/ThisWeek'
import { MembershipTeaser, MixtapePreview, GalleryStrip, ArticlesBlock, Footer } from './components/Blocks'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ThisWeek />
        <MembershipTeaser />
        <MixtapePreview />
        <GalleryStrip />
        <ArticlesBlock />
      </main>
      <Footer />
    </div>
  )
}

export default App
