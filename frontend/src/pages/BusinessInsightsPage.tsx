import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import { Lightbulb } from 'lucide-react'

const BusinessInsightsPage = () => {
  const insights = [
    {
      title: 'Digital Marketing Trend',
      description: 'Digital ad spends are up 23% this quarter. Focus on video content and social media.',
      impact: 'high',
      icon: '📊',
    },
    {
      title: 'Emerging Markets',
      description: 'Asia-Pacific region shows the most business growth. Consider expanding operations.',
      impact: 'high',
      icon: '🌏',
    },
    {
      title: 'Automation Investment',
      description: 'Companies investing in automation report 2x productivity boost and cost savings.',
      impact: 'medium',
      icon: '🤖',
    },
  ]

  return (
    <div className="flex h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb size={32} className="text-yellow-400" />
            <h1 className="text-3xl font-bold text-white">Business Insights</h1>
          </div>

          <div className="space-y-6">
            {insights.map((insight, index) => (
              <div key={index} className="glass p-8 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{insight.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{insight.title}</h3>
                    <p className="text-gray-300 mb-4">{insight.description}</p>
                    <span className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                      insight.impact === 'high'
                        ? 'bg-red-500/20 text-red-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {insight.impact.toUpperCase()} IMPACT
                    </span>
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

export default BusinessInsightsPage
