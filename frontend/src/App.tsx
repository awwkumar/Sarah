import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '@pages/Dashboard'
import ChatPage from '@pages/ChatPage'
import NewsPage from '@pages/NewsPage'
import MarketsPage from '@pages/MarketsPage'
import BusinessInsightsPage from '@pages/BusinessInsightsPage'
import Settings from '@pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/insights" element={<BusinessInsightsPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
