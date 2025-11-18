import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import EventPage from './components/EventPage'
import ArticlesHome from './components/ArticlesHome'
import ArticlePage from './components/ArticlePage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/event/:slug" element={<EventPage />} />
        <Route path="/articles" element={<ArticlesHome />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
