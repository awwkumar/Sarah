import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import { TrendingUp } from 'lucide-react'
import MarketSummary from '@components/MarketSummary'

const MarketsPage = () => {
  return (
    <div className="flex h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={32} className="text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Market Data</h1>
          </div>
          <MarketSummary />
        </div>
      </main>
    </div>
  )
}

export default MarketsPage
