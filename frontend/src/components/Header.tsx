import { Search, Bell, Settings, User, Cloud, Droplets } from 'lucide-react'
import { useState, useEffect } from 'react'

interface WeatherData {
  temp: number
  condition: string
  location: string
}

const Header = () => {
  const [weather, setWeather] = useState<WeatherData>({
    temp: 32,
    condition: 'Haze',
    location: 'New Delhi, India',
  })
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="bg-gradient-dark border-b border-purple-500/20 px-8 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Good {time.getHours() < 12 ? 'Morning' : time.getHours() < 18 ? 'Evening' : 'Night'}, Awadhesh 👋
          </h1>
          <p className="text-sm text-gray-400 mt-1">I'm SARAH, your AI companion and intelligent advisor.</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Weather */}
          <div className="glass px-4 py-3 rounded-lg flex items-center gap-3">
            <Cloud size={20} className="text-blue-400" />
            <div>
              <p className="text-sm font-semibold text-white">{weather.location}</p>
              <p className="text-xs text-gray-400">{weather.temp}°C - {weather.condition}</p>
            </div>
          </div>

          {/* Time */}
          <div className="text-right">
            <p className="text-lg font-bold text-white">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="text-xs text-gray-400">{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-all">
              <Search size={20} className="text-gray-400 hover:text-white" />
            </button>
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-all relative">
              <Bell size={20} className="text-gray-400 hover:text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-all">
              <Settings size={20} className="text-gray-400 hover:text-white" />
            </button>
            <button className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
              AK
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
