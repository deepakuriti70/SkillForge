"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Zap, Target, Users, Heart, Globe, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe everyone deserves access to real-world career experience, regardless of background.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive ecosystem where learners help each other grow and succeed.",
  },
  {
    icon: Heart,
    title: "Empathy in Design",
    description: "Every feature is built with deep understanding of the challenges career changers face.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Making professional development accessible to learners worldwide, in multiple languages.",
  },
]

const team = [
  { name: "Sarah Chen", role: "CEO & Co-founder", image: "/team/sarah.jpg" },
  { name: "Marcus Williams", role: "CTO & Co-founder", image: "/team/marcus.jpg" },
  { name: "Elena Rodriguez", role: "Head of Product", image: "/team/elena.jpg" },
  { name: "David Kim", role: "Head of AI", image: "/team/david.jpg" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Forging the Future of <span className="text-gradient">Career Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              SkillForge was born from a simple idea: what if you could gain years of work experience 
              before your first day on the job?
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">The Beginning</h2>
              <p className="text-muted-foreground mb-4">
                In 2023, our founders experienced firsthand the frustration of the modern job market. 
                Despite having technical skills, they struggled to land interviews because they lacked 
                &quot;real-world experience.&quot; The classic catch-22: you need experience to get a job, 
                but you need a job to get experience.
              </p>
              <p className="text-muted-foreground mb-4">
                That&apos;s when they asked: what if AI could create realistic work simulations? What if 
                anyone could practice being a software developer, product manager, or data scientist 
                in a virtual company environment?
              </p>
              <p className="text-muted-foreground">
                SkillForge is the answer to that question. We&apos;ve built the world&apos;s first AI-powered 
                career simulation platform, where you don&apos;t just learn skills—you live them.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="glass-card p-6 rounded-2xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
                <div className="text-muted-foreground">Active Learners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                <div className="text-muted-foreground">Career Paths</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">94%</div>
                <div className="text-muted-foreground">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
                <div className="text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking to change careers, upskill, or start your journey—we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-primary border-0">
                <Link href="/signup">Start Learning Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
