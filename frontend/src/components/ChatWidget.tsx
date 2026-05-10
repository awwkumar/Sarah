import { useState, useRef, useEffect } from 'react'
import { Send, Loader } from 'lucide-react'
import { useChat } from '@hooks/useChat'

const ChatWidget = () => {
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

  return (
    <div className="glass p-6 rounded-lg flex flex-col h-96">
      <h2 className="text-xl font-bold text-white mb-4">Chat with SARAH</h2>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <p className="text-gray-400">Hi Awadhesh! 😊<br/>I'm SARAH. I can chat, search the web, analyze markets, and give you smart business & marketing insights.<br/>What would you like to explore today?</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-gradient-primary text-white'
                    : 'bg-purple-500/20 text-gray-200'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">{msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-purple-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <Loader size={16} className="animate-spin" />
              <span className="text-sm text-gray-200">SARAH is thinking...</span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-gradient-primary p-2 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-2 text-center">
        ⚙️ SARAH supports multiple languages automatically.
      </p>
    </div>
  )
}

export default ChatWidget
