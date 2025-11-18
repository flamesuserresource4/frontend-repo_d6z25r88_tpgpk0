import Navbar from './Navbar'
import CouponRibbon from './CouponRibbon'
import { Footer } from './Blocks'
import { ArticlesList, ArticleEditor } from './Articles'

export default function ArticlesHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CouponRibbon />
      <main className="pt-16">
        <ArticlesList />
        <ArticleEditor />
      </main>
      <Footer />
    </div>
  )
}
