import Navbar from './Navbar'
import CouponRibbon from './CouponRibbon'
import { Footer } from './Blocks'
import { useParams } from 'react-router-dom'
import { ArticleDetail } from './Articles'

export default function ArticlePage() {
  const { slug } = useParams()
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CouponRibbon />
      <main className="pt-16">
        <ArticleDetail slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
