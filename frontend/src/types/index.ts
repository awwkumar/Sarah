export interface Message {
  id: string
  content: string
  sender: 'user' | 'sarah'
  timestamp: Date
  mood?: string
}

export interface User {
  id: string
  name: string
  email: string
  language: string
  timezone: string
  preferences: Record<string, any>
}

export interface NewsArticle {
  id: string
  title: string
  description: string
  url: string
  imageUrl: string
  source: string
  publishedAt: Date
  category: string
}

export interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  high: number
  low: number
  volume: number
  timestamp: Date
}

export interface BusinessInsight {
  id: string
  title: string
  description: string
  category: string
  impact: 'high' | 'medium' | 'low'
  timestamp: Date
}

export interface ChatResponse {
  message: string
  mood: string
  language: string
  confidence: number
}
