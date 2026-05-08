"use client"

import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Search, MessageSquare, Mail, BookOpen, 
  HelpCircle, CreditCard, Settings, Users, ArrowRight
} from "lucide-react"

const topics = [
  {
    icon: HelpCircle,
    title: "Getting Started",
    description: "New to SkillForge? Start here",
    articles: 12,
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Manage your profile and preferences",
    articles: 8,
  },
  {
    icon: CreditCard,
    title: "Billing & Subscriptions",
    description: "Payment, plans, and invoices",
    articles: 10,
  },
  {
    icon: BookOpen,
    title: "Using the Platform",
    description: "Features and how-to guides",
    articles: 24,
  },
  {
    icon: Users,
    title: "Teams & Enterprise",
    description: "Managing teams and organizations",
    articles: 15,
  },
  {
    icon: MessageSquare,
    title: "AI Features",
    description: "Mentor, interviews, and more",
    articles: 18,
  },
]

const popularQuestions = [
  "How do I reset my password?",
  "How does XP and leveling work?",
  "Can I change my career path?",
  "How do I cancel my subscription?",
  "What payment methods do you accept?",
  "How do AI interviews work?",
]

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              How can we help?
            </h1>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for answers..." 
                className="pl-12 h-14 text-lg bg-background border-border"
              />
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-6">Browse by Topic</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <Link
                  key={topic.title}
                  href="#"
                  className="glass-card p-5 rounded-xl hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <topic.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{topic.articles} articles</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-6">Popular Questions</h2>
            <div className="space-y-3">
              {popularQuestions.map((question) => (
                <Link
                  key={question}
                  href="#"
                  className="flex items-center justify-between p-4 glass-card rounded-xl hover:border-primary/30 transition-colors group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">{question}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary border-0">
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
