"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Palette, LineChart, Brain, Shield, Megaphone } from "lucide-react"

const careerPaths = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Full-stack, frontend, backend, mobile, and DevOps tracks",
    paths: ["Full-Stack Developer", "Frontend Engineer", "Backend Developer", "Mobile Developer", "DevOps Engineer"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, product design, and design systems",
    paths: ["UI/UX Designer", "Product Designer", "UX Researcher", "Design Systems"],
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Data science, analytics, and machine learning",
    paths: ["Data Scientist", "Data Analyst", "ML Engineer", "BI Analyst"],
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Brain,
    title: "Product Management",
    description: "Product strategy, ownership, and growth",
    paths: ["Product Manager", "Technical PM", "Growth PM", "Product Owner"],
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security engineering, analysis, and compliance",
    paths: ["Security Engineer", "Penetration Tester", "Security Analyst", "Compliance"],
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    description: "Digital marketing, content, and growth hacking",
    paths: ["Growth Marketer", "Content Strategist", "SEO Specialist", "Performance Marketing"],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              15+ Career Paths
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Explore <span className="text-gradient">Career Paths</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover and practice different career paths through realistic AI simulations. 
              Find your perfect fit before committing.
            </p>
            <Button size="lg" asChild className="gradient-primary border-0">
              <Link href="/signup">Start Exploring</Link>
            </Button>
          </div>
        </section>

        {/* Career Paths Grid */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career) => (
                <div key={career.title} className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors group">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${career.bg} mb-4`}>
                    <career.icon className={`h-6 w-6 ${career.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.paths.map((path) => (
                      <Badge key={path} variant="secondary" className="text-xs">
                        {path}
                      </Badge>
                    ))}
                  </div>
                  <Link 
                    href="/signup" 
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Explore path <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">How Career Exploration Works</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Try before you commit. Experience day-to-day tasks in any role.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">1</div>
                <h3 className="font-semibold mb-2">Choose a Path</h3>
                <p className="text-sm text-muted-foreground">Select any career path that interests you</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">2</div>
                <h3 className="font-semibold mb-2">Simulate Work</h3>
                <p className="text-sm text-muted-foreground">Complete realistic tasks and projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">3</div>
                <h3 className="font-semibold mb-2">Get Feedback</h3>
                <p className="text-sm text-muted-foreground">AI mentor guides your growth</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
