"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, Send, User, Sparkles } from "lucide-react"

const demoConversation = [
  {
    role: "assistant",
    content: "Hi! I'm your AI Career Mentor. I see you're interested in becoming a Software Engineer. What specific area would you like to explore - frontend, backend, or full-stack development?",
  },
  {
    role: "user",
    content: "I'm interested in full-stack development, but I'm not sure where to start.",
  },
  {
    role: "assistant",
    content: "Great choice! Full-stack development is highly versatile. Based on your background, I recommend starting with:\n\n1. **Frontend fundamentals** - React + TypeScript\n2. **Backend basics** - Node.js + Express\n3. **Database skills** - PostgreSQL\n\nI've created a personalized 12-week simulation where you'll build a real SaaS product. Ready to start with your first task?",
  },
]

export function AIPreview() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/5">
              <Sparkles className="h-3 w-3 mr-2" />
              Powered by GPT-4
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Meet Your AI{" "}
              <span className="text-gradient">Career Mentor</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlike generic chatbots, our AI mentors understand career development deeply. 
              They remember your progress, adapt to your learning style, and provide 
              guidance that feels genuinely personal.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Personalized career path recommendations",
                "Real-time feedback on your work",
                "Mock interview practice with detailed analysis",
                "24/7 availability for questions and guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20">
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="gradient-primary border-0"
              onClick={() => setShowDemo(true)}
            >
              Try AI Mentor Demo
            </Button>
          </div>

          {/* Chat Preview */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-40" />
            
            <Card className="relative glass overflow-hidden border-border/50">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">AI Career Mentor</h4>
                  <p className="text-xs text-muted-foreground">Powered by GPT-4</p>
                </div>
                <Badge className="ml-auto bg-success/20 text-success border-success/30">
                  Online
                </Badge>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 h-80 overflow-y-auto">
                {demoConversation.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      message.role === "user" 
                        ? "bg-secondary" 
                        : "bg-primary/20"
                    }`}>
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    disabled
                  />
                  <Button size="icon" className="rounded-full gradient-primary border-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
