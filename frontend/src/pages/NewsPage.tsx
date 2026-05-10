import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import { Newspaper, Search } from 'lucide-react'
import { useState } from 'react'

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const newsArticles = [
    { title: 'Global markets rally as inflation cools', source: 'Reuters', time: '10m ago', category: 'Markets' },
    { title: 'AI revolutionizes marketing strategies in 2025', source: 'Forbes', time: '35m ago', category: 'Technology' },
    { title: 'Oil prices dip amid supply concerns', source: 'Bloomberg', time: '1h ago', category: 'Energy' },
    { title: 'Tech stocks lead gains on strong earnings', source: 'CNBC', time: '2h ago', category: 'Technology' },
  ]

  return (
    <div className="flex h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper size={32} className="text-green-400" />
            <h1 className="text-3xl font-bold text-white">Global News</h1>
          </div>

          {/* Search */}
          <div className="glass p-6 rounded-lg mb-8">
            <div className="flex items-center gap-2 bg-purple-500/20 rounded-lg px-4 py-3">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-4">
            {newsArticles.map((article, index) => (
              <div key={index} className="glass p-6 rounded-lg hover:bg-purple-500/20 transition-all cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-purple-400">{article.source}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{article.time}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">{article.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewsPage
