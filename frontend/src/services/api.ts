import axios from 'axios'
import { Message, ChatResponse, NewsArticle, MarketData } from '@types/index'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Chat Services
export const chatService = {
  async sendMessage(message: string): Promise<ChatResponse> {
    const response = await api.post('/chat', { message })
    return response.data
  },

  async analyzeMessage(message: string): Promise<{ mood: string; sentiment: string }> {
    const response = await api.post('/chat/analyze', { message })
    return response.data
  },

  async getChatHistory(userId: string): Promise<Message[]> {
    const response = await api.get(`/chat/history/${userId}`)
    return response.data
  },
}

// News Services
export const newsService = {
  async getLatestNews(): Promise<NewsArticle[]> {
    const response = await api.get('/data/news')
    return response.data
  },

  async getNewsByCategory(category: string): Promise<NewsArticle[]> {
    const response = await api.get(`/data/news/${category}`)
    return response.data
  },

  async searchNews(query: string): Promise<NewsArticle[]> {
    const response = await api.get('/data/news/search', { params: { q: query } })
    return response.data
  },
}

// Market Services
export const marketService = {
  async getMarketData(): Promise<MarketData[]> {
    const response = await api.get('/data/market')
    return response.data
  },

  async getStockData(symbol: string): Promise<MarketData> {
    const response = await api.get(`/data/stock/${symbol}`)
    return response.data
  },

  async getMarketTrends(): Promise<any> {
    const response = await api.get('/data/market/trends')
    return response.data
  },
}

// User Services
export const userService = {
  async createUser(userData: any) {
    const response = await api.post('/users', userData)
    return response.data
  },

  async getUserProfile(userId: string) {
    const response = await api.get(`/users/${userId}`)
    return response.data
  },

  async updateUserProfile(userId: string, userData: any) {
    const response = await api.put(`/users/${userId}`, userData)
    return response.data
  },
}

export default api
