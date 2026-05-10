import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import { Settings as SettingsIcon, Bell, Lock, User, Palette } from 'lucide-react'
import { useState } from 'react'

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'English',
    theme: 'dark',
    notifications: true,
    twoFactor: false,
  })

  return (
    <div className="flex h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <Header />
        <div className="p-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <SettingsIcon size={32} className="text-gray-400" />
            <h1 className="text-3xl font-bold text-white">Settings</h1>
          </div>

          <div className="space-y-6">
            {/* Account */}
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <User size={24} /> Account
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <input type="text" defaultValue="Awadhesh" className="w-full glass px-4 py-2 rounded-lg text-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input type="email" defaultValue="awadhesh@example.com" className="w-full glass px-4 py-2 rounded-lg text-white" />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Palette size={24} /> Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Language</label>
                  <select value={settings.language} className="w-full glass px-4 py-2 rounded-lg text-white">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Malay</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Theme</label>
                  <select value={settings.theme} className="w-full glass px-4 py-2 rounded-lg text-white">
                    <option>Dark</option>
                    <option>Light</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Bell size={24} /> Notifications
              </h2>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  className="w-4 h-4"
                  onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                />
                <span className="text-gray-300">Enable notifications</span>
              </label>
            </div>

            {/* Security */}
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock size={24} /> Security
              </h2>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.twoFactor}
                  className="w-4 h-4"
                  onChange={(e) => setSettings({ ...settings, twoFactor: e.target.checked })}
                />
                <span className="text-gray-300">Enable two-factor authentication</span>
              </label>
            </div>

            {/* Save Button */}
            <button className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Settings
