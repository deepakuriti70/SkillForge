"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Send, Sparkles, BookOpen, Code2, Target, User } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI mentor. I'm here to help you grow as a Full-Stack Developer. Whether you have questions about code, career advice, or need help with your current tasks, I'm here for you. What would you like to work on today?",
    timestamp: new Date(Date.now() - 60000),
  },
]

const quickPrompts = [
  { icon: Code2, label: "Review my code", prompt: "Can you review my latest code and suggest improvements?" },
  { icon: Target, label: "Career advice", prompt: "What skills should I focus on to advance my career?" },
  { icon: BookOpen, label: "Explain a concept", prompt: "Can you explain how async/await works in JavaScript?" },
  { icon: Sparkles, label: "Interview prep", prompt: "Help me prepare for a technical interview" },
]

export default function MentorPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(messageText),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    if (input.includes("code") || input.includes("review")) {
      return "I'd be happy to review your code! Please share the code snippet you'd like me to look at, and I'll provide feedback on:\n\n1. Code structure and organization\n2. Best practices and patterns\n3. Potential bugs or issues\n4. Performance optimizations\n5. Readability improvements\n\nJust paste your code and let me know what specific aspects you'd like me to focus on."
    }
    if (input.includes("career") || input.includes("skill")) {
      return "Great question about career development! Based on your current path as a Full-Stack Developer, here are some skills to focus on:\n\n**Technical Skills:**\n- TypeScript and modern JavaScript\n- System design and architecture\n- Database optimization\n- Cloud services (AWS, GCP, or Azure)\n\n**Soft Skills:**\n- Technical communication\n- Code review practices\n- Mentoring others\n\nWould you like me to elaborate on any of these areas?"
    }
    if (input.includes("interview")) {
      return "Let's prepare you for your technical interview! Here's how we can approach this:\n\n1. **Data Structures & Algorithms** - I can give you practice problems\n2. **System Design** - We can walk through designing scalable systems\n3. **Behavioral Questions** - Practice the STAR method\n4. **Live Coding** - Simulate a real coding interview\n\nWhich area would you like to start with?"
    }
    return "That's a great topic to explore! I'm here to help you learn and grow. Could you tell me more about what specifically you'd like to understand or achieve? The more context you provide, the better I can tailor my guidance to your needs."
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Mentor</h1>
          <p className="text-muted-foreground">Your personal career development assistant</p>
        </div>
        <Badge variant="secondary" className="bg-green-500/10 text-green-500">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Online
        </Badge>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass-card rounded-2xl flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                message.role === "assistant" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-secondary text-foreground"
              }`}>
                {message.role === "assistant" ? (
                  <Brain className="h-5 w-5" />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </div>
              <div className={`flex-1 max-w-[80%] ${message.role === "user" ? "text-right" : ""}`}>
                <div className={`inline-block p-4 rounded-2xl ${
                  message.role === "assistant" 
                    ? "bg-secondary/50 text-left" 
                    : "bg-primary text-primary-foreground text-left"
                }`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Brain className="h-5 w-5" />
              </div>
              <div className="p-4 rounded-2xl bg-secondary/50">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickPrompts.map((prompt) => (
              <Button
                key={prompt.label}
                variant="outline"
                size="sm"
                className="shrink-0"
                onClick={() => handleSend(prompt.prompt)}
              >
                <prompt.icon className="h-4 w-4 mr-2" />
                {prompt.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-3"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your mentor anything..."
              className="flex-1"
            />
            <Button type="submit" className="gradient-primary border-0" disabled={!input.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
