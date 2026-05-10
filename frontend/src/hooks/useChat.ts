import { useState, useCallback } from 'react'
import { chatService } from '@services/api'
import { Message } from '@types/index'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(async (content: string) => {
    setLoading(true)
    setError(null)

    try {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        content,
        sender: 'user',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, userMessage])

      // Get SARAH response
      const response = await chatService.sendMessage(content)
      const sarahMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.message,
        sender: 'sarah',
        timestamp: new Date(),
        mood: response.mood,
      }
      setMessages(prev => [...prev, sarahMessage])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }, [])

  return { messages, loading, error, sendMessage, setMessages }
}
