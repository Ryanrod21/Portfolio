import { useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Ryan's assistant. Ask me anything about Ryan's skills, projects, or experience.",
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiUrl: string =
        window.location.hostname === 'localhost'
          ? 'http://localhost:5000'
          : (import.meta.env.VITE_API_URL as string);

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: { response: string } = await response.json();

      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: data.response },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again in a moment.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14        
          bg-teal-600 hover:bg-teal-700
          text-white rounded-full
          shadow-lg
          flex items-center justify-center
          text-lg             
        "
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm sm:w-96 h-[400px] lg:h-[500px]  bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b font-semibold">Ask Ryan 👋</div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                  msg.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white'
                    : 'mr-auto bg-gray-200 text-gray-900'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <div
                    className="text-sm leading-relaxed space-y-2 chatbox-text"
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                ) : (
                  msg.content
                )}
              </div>
            ))}

            {isLoading && <div className="text-gray-500 text-sm">Typing…</div>}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about Ryan…"
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
