import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import { MessageCircle, Loader } from 'lucide-react'
import { useChat } from '@hooks/useChat'
import { useState, useRef, useEffect } from 'react'

const ChatPage = () => {
  const { messages, loading, sendMessage } = useChat()
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    await sendMessage(input)
    setInput('')
  }

  const quickQuestions = [
    '"What's the latest news?"',
    '"Market update"',
    '"Business ideas"',
    '"Marketing tips"',
  ]

  return (
    <div className="flex h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 lg:ml-64 overflow-y-auto flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col p-8">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle size={32} className="text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Chat with SARAH</h1>
          </div>

          {/* Messages */}
          <div className="flex-1 glass rounded-lg p-6 mb-6 overflow-y-auto space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <MessageCircle size={64} className="text-purple-400 mb-4 opacity-50" />
                <h2 className="text-2xl font-bold text-white mb-2">Start a conversation</h2>
                <p className="text-gray-400 mb-8">Ask me anything about news, markets, business, or more!</p>
                <div className="grid grid-cols-2 gap-4">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question.slice(1, -1))}
                      className="glass px-4 py-2 text-sm text-purple-300 hover:text-purple-200 rounded-lg hover:bg-purple-500/20 transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-2xl px-6 py-3 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-gradient-primary text-white'
                          : 'bg-purple-500/20 text-gray-100'
                      }`}
                    >
                      <p className="text-base">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-purple-500/20 px-6 py-3 rounded-lg flex items-center gap-3">
                      <Loader size={20} className="animate-spin" />
                      <span className="text-gray-100">SARAH is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 glass border border-purple-500/30 rounded-lg px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-gradient-primary px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3 text-center">⚙️ SARAH supports multiple languages automatically.</p>
        </div>
      </main>
    </div>
  )
}

export default ChatPage
