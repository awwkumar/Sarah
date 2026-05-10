import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
  LayoutGrid,
  MessageCircle,
  Newspaper,
  TrendingUp,
  Lightbulb,
  Globe,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Radio,
} from 'lucide-react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/' },
    { icon: MessageCircle, label: 'Chat with SARAH', path: '/chat' },
    { icon: Newspaper, label: 'Global News', path: '/news' },
    { icon: TrendingUp, label: 'Markets', path: '/markets' },
    { icon: Lightbulb, label: 'Business Insights', path: '/insights' },
    { icon: Globe, label: 'World Map', path: '/' },
    { icon: Bell, label: 'Reminders', path: '/' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ]

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 bg-purple-600 p-2 rounded-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-dark border-r border-purple-500/20 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-20'
        } hidden lg:flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-purple-500/20 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50">
            S
          </div>
          {isOpen && <span className="ml-4 font-bold text-xl text-white">SARAH</span>}
        </div>

        {/* Status */}
        {isOpen && (
          <div className="px-6 py-4 border-b border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Online</span>
            </div>
            <p className="text-xs text-gray-500">AI Assistant</p>
          </div>
        )}

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-gradient-primary text-white shadow-lg shadow-purple-500/50'
                  : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <item.icon size={20} />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-purple-500/20 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-red-500/10 transition-all">
            <LogOut size={20} />
            {isOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
