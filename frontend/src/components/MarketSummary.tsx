import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'

const MarketSummary = () => {
  const markets = [
    { symbol: 'S&P 500', name: 'US Index', price: '5,304.72', change: '+1.12%', positive: true },
    { symbol: 'NASDAQ', name: 'US Index', price: '16,742.39', change: '+1.35%', positive: true },
    { symbol: 'DOW JONES', name: 'US Index', price: '39,065.26', change: '+0.92%', positive: true },
    { symbol: 'GOLD', name: 'Commodities', price: '2,384.45', change: '+0.45%', positive: true },
    { symbol: 'BTC / USD', name: 'Cryptocurrency', price: '68,753.21', change: '+2.68%', positive: true },
  ]

  const chartData = Array.from({ length: 30 }, (_, i) => ({
    time: i,
    value: 100 + Math.sin(i / 5) * 20 + Math.random() * 5,
  }))

  return (
    <div className="glass p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Market Summary</h2>
        <a href="#" className="text-sm text-purple-400 hover:text-purple-300">See All</a>
      </div>

      <div className="space-y-4">
        {markets.map((market, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-purple-500/10 rounded-lg transition-all">
            <div className="flex-1">
              <p className="font-semibold text-white">{market.symbol}</p>
              <p className="text-xs text-gray-400">{market.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'transparent',
                        border: 'none',
                      }}
                      formatter={(value) => value.toFixed(1)}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={market.positive ? '#10B981' : '#EF4444'}
                      dot={false}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-right min-w-fit">
                <p className="font-bold text-white">{market.price}</p>
                <p className={`text-sm font-semibold flex items-center gap-1 ${
                  market.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {market.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {market.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketSummary
