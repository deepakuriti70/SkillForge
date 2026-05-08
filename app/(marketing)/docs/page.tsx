"use client"

import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, BookOpen, Code2, Zap, Users, Settings, HelpCircle,
  ArrowRight, FileText, Video, MessageSquare
} from "lucide-react"

const categories = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "New to SkillForge? Start here.",
    articles: ["Quick Start Guide", "Creating Your Account", "Choosing a Career Path", "Your First Simulation"],
  },
  {
    icon: BookOpen,
    title: "Platform Guide",
    description: "Learn how to use all features.",
    articles: ["Dashboard Overview", "Task Management", "AI Mentor Guide", "Code Editor Basics"],
  },
  {
    icon: Code2,
    title: "Developer Docs",
    description: "Technical documentation and APIs.",
    articles: ["API Reference", "Webhooks", "SDKs & Libraries", "Code Examples"],
  },
  {
    icon: Users,
    title: "Teams & Enterprise",
    description: "Manage teams and organizations.",
    articles: ["Team Setup", "Admin Controls", "SSO Configuration", "Analytics & Reporting"],
  },
  {
    icon: Settings,
    title: "Account & Billing",
    description: "Manage your account settings.",
    articles: ["Profile Settings", "Subscription Plans", "Payment Methods", "Invoices"],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions.",
    articles: ["FAQ", "Known Issues", "Contact Support", "Status Page"],
  },
]

const popularArticles = [
  { title: "How to ace AI interviews", icon: MessageSquare, type: "Guide" },
  { title: "Getting started video tutorial", icon: Video, type: "Video" },
  { title: "Understanding XP and levels", icon: FileText, type: "Article" },
  { title: "Best practices for code reviews", icon: FileText, type: "Article" },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to master SkillForge and accelerate your career.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-12 h-14 text-lg bg-background border-border"
              />
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-6">Popular Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularArticles.map((article) => (
                <Link 
                  key={article.title}
                  href="#"
                  className="glass-card p-4 rounded-xl hover:border-primary/30 transition-colors flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <article.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs mb-1">{article.type}</Badge>
                    <p className="text-sm font-medium">{article.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div key={category.title} className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <Link 
                          href="#" 
                          className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                        >
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
