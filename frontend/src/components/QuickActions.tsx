import { MessageCircle, Globe, BarChart3, Lightbulb, TrendingUp } from 'lucide-react'

const QuickActions = () => {
  const actions = [
    {
      icon: MessageCircle,
      label: 'Ask SARAH',
      description: 'Anything you want',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      label: 'Real-time News',
      description: 'Global updates',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      label: 'Market Insights',
      description: 'Live financial data',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Lightbulb,
      label: 'Business Ideas',
      description: 'AI-driven suggestions',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      label: 'Marketing Tips',
      description: 'Grow your brand',
      color: 'from-pink-500 to-pink-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`glass p-4 rounded-lg hover:scale-105 transition-transform text-left group`}
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all`}>
            <action.icon size={24} className="text-white" />
          </div>
          <h3 className="font-semibold text-white text-sm">{action.label}</h3>
          <p className="text-xs text-gray-400 mt-1">{action.description}</p>
        </button>
      ))}
    </div>
  )
}

export default QuickActions
