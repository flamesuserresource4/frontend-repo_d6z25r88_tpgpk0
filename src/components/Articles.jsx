import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [tag, setTag] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const url = tag ? `${baseUrl}/api/articles?tag=${encodeURIComponent(tag)}` : `${baseUrl}/api/articles`
        const res = await fetch(url)
        const data = await res.json()
        setArticles(Array.isArray(data) ? data : [])
      } catch (e) {
        setArticles([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [tag])

  const tags = useMemo(() => {
    const set = new Set()
    articles.forEach(a => (a.tags || []).forEach(t => set.add(t)))
    return Array.from(set)
  }, [articles])

  return (
    <section className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Culture Journal</h2>
          <div className="flex items-center gap-2">
            <select value={tag} onChange={e => setTag(e.target.value)} className="bg-neutral-950 border border-neutral-800 text-sm px-2 py-1">
              <option value="">All tags</option>
              {tags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="text-neutral-400">Loading articles…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(a => (
              <Link key={a.slug} to={`/article/${a.slug}`} className="group block bg-neutral-950 border border-neutral-800 hover:border-red-600/40 transition">
                {a.cover_image ? (
                  <div className="aspect-video bg-neutral-900" style={{backgroundImage:`url(${a.cover_image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
                ) : (
                  <div className="aspect-video bg-neutral-900" />
                )}
                <div className="p-4">
                  <p className="text-red-500 uppercase tracking-widest text-[10px]">{a.tags?.join(' • ')}</p>
                  <h3 className="text-white font-semibold text-lg mt-1 group-hover:text-red-400">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function ArticleDetail({ slug }) {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${baseUrl}/api/articles/${slug}`)
        const data = await res.json()
        setArticle(data)
      } catch (e) {
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }
    if (slug) load()
  }, [slug])

  if (loading) return <div className="max-w-3xl mx-auto px-6 py-16 text-neutral-400">Loading…</div>
  if (!article) return <div className="max-w-3xl mx-auto px-6 py-16 text-neutral-400">Not found.</div>

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-red-500 uppercase tracking-widest text-xs">{article.tags?.join(' • ')}</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">{article.title}</h1>
      {article.author && (
        <p className="text-neutral-400 mt-2 text-sm">By {article.author}</p>
      )}
      {article.cover_image && (
        <img src={article.cover_image} alt="cover" className="mt-6 w-full rounded border border-neutral-800" />
      )}
      <div className="prose prose-invert prose-red mt-6 max-w-none" dangerouslySetInnerHTML={{__html: article.content}} />
    </article>
  )
}

export function ArticleEditor() {
  const [form, setForm] = useState({ title: '', slug: '', tags: '', author: '', cover_image: '', content: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Saving…')
    const payload = {
      title: form.title,
      slug: form.slug,
      content: form.content,
      tags: form.tags.split(',').map(s => s.trim()).filter(Boolean),
      author: form.author || undefined,
      cover_image: form.cover_image || undefined,
    }
    try {
      const res = await fetch(`${baseUrl}/admin/articles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data.ok) setStatus(`Saved: ${data.action}`)
      else setStatus('Error saving')
    } catch (e) {
      setStatus('Error saving')
    }
  }

  return (
    <section className="bg-neutral-950 border-y border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold">Write an Article</h2>
        <form onSubmit={submit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={form.title} onChange={e=>setForm({...form, title:e.target.value})} placeholder="Title" className="bg-black border border-neutral-800 px-3 py-2" required />
          <input value={form.slug} onChange={e=>setForm({...form, slug:e.target.value.replace(/\s+/g,'-').toLowerCase()})} placeholder="Slug (no spaces)" className="bg-black border border-neutral-800 px-3 py-2" required />
          <input value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})} placeholder="Tags (comma-separated)" className="bg-black border border-neutral-800 px-3 py-2 sm:col-span-2" />
          <input value={form.author} onChange={e=>setForm({...form, author:e.target.value})} placeholder="Author" className="bg-black border border-neutral-800 px-3 py-2" />
          <input value={form.cover_image} onChange={e=>setForm({...form, cover_image:e.target.value})} placeholder="Cover Image URL" className="bg-black border border-neutral-800 px-3 py-2" />
          <textarea value={form.content} onChange={e=>setForm({...form, content:e.target.value})} placeholder="Content (HTML or simple text)" className="bg-black border border-neutral-800 px-3 py-2 min-h-[200px] sm:col-span-2" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold">Save</button>
            <span className="text-neutral-400 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
