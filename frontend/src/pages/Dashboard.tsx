import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import QuickActions from '@components/QuickActions'
import MarketSummary from '@components/MarketSummary'
import ChatWidget from '@components/ChatWidget'
import { Globe, TrendingUp, TrendingDown, Newspaper } from 'lucide-react'

const Dashboard = () => {
  const regions = [
    { name: 'North America', change: '+1.28%', positive: true },
    { name: 'Europe', change: '+0.87%', positive: true },
    { name: 'Asia', change: '+2.15%', positive: true },
    { name: 'South America', change: '-0.35%', positive: false },
    { name: 'Africa', change: '+0.65%', positive: true },
    { name: 'Australia', change: '+1.02%', positive: true },
  ]

  const news = [
    {
      title: 'Global markets rally as inflation cools',
      source: 'Reuters',
      time: '10m ago',
      image: '📊',
    },
    {
      title: 'AI revolutionizes marketing strategies in 2025',
      source: 'Forbes',
      time: '35m ago',
      image: '🤖',
    },
    {
      title: 'Oil prices dip amid supply concerns',
      source: 'Bloomberg',
      time: '1h ago',
      image: '⛽',
    },
    {
      title: 'Tech stocks lead gains on strong earnings',
      source: 'CNBC',
      time: '2h ago',
      image: '💻',
    },
  ]

  return (
    <div className="flex h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 space-y-8">
          {/* Quick Actions */}
          <QuickActions />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Global Overview */}
              <div className="glass p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Globe size={24} />
                  Global Overview
                </h2>
                <div className="w-full h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">🌍 World Map Visualization</p>
                    <p className="text-xs text-gray-500 mt-2">Real-time global market data</p>
                  </div>
                </div>

                {/* Regional Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {regions.map((region, index) => (
                    <div key={index} className="bg-purple-500/10 p-4 rounded-lg">
                      <p className="text-white font-semibold text-sm">{region.name}</p>
                      <p className={`text-sm font-bold mt-2 flex items-center gap-1 ${
                        region.positive ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {region.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {region.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top News */}
              <div className="glass p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Newspaper size={24} />
                    Top Global News
                  </h2>
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300">See All</a>
                </div>
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <div key={index} className="flex gap-4 p-3 hover:bg-purple-500/10 rounded-lg transition-all cursor-pointer">
                      <div className="text-2xl">{item.image}</div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-400">{item.source}</span>
                          <span className="text-xs text-gray-500">• {item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Chat Widget */}
              <ChatWidget />

              {/* Market Summary */}
              <MarketSummary />

              {/* Business Insights */}
              <div className="glass p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">Business Insights</h2>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <p className="text-white font-semibold text-sm">Focus on Digital Marketing</p>
                    <p className="text-xs text-gray-300 mt-1">Digital ad spends are up 23% this quarter</p>
                  </div>
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <p className="text-white font-semibold text-sm">Explore Emerging Markets</p>
                    <p className="text-xs text-gray-300 mt-1">Asia-Pacific shows most business growth</p>
                  </div>
                  <div className="p-3 bg-yellow-500/20 rounded-lg">
                    <p className="text-white font-semibold text-sm">Invest in Automation</p>
                    <p className="text-xs text-gray-300 mt-1">Automation can boost productivity 2x</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-primary text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  View Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
