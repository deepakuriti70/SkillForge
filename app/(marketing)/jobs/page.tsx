"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe } from "lucide-react"

const benefits = [
  "Competitive salary + equity",
  "Remote-first culture",
  "Unlimited PTO",
  "Health, dental & vision",
  "Home office stipend",
  "Learning budget",
  "Team retreats",
  "Parental leave",
]

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    title: "ML/AI Engineer",
    department: "AI",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    title: "Customer Success Lead",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
]

export default function JobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              We&apos;re Hiring!
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Build the Future of <span className="text-gradient">Career Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our mission to make real-world career experience accessible to everyone.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Mission-Driven</h3>
                <p className="text-sm text-muted-foreground">We&apos;re passionate about democratizing career development</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Remote-First</h3>
                <p className="text-sm text-muted-foreground">Work from anywhere with a distributed global team</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Move Fast</h3>
                <p className="text-sm text-muted-foreground">Ship quickly, learn constantly, iterate always</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Benefits & Perks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="glass-card p-4 rounded-xl text-center">
                  <p className="text-sm font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <Link
                  key={job.title}
                  href="#"
                  className="block glass-card p-5 rounded-xl hover:border-primary/30 transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span>{job.department}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don&apos;t see your role?</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re always looking for talented people. Send us your resume!
            </p>
            <Button size="lg" variant="outline">
              Send Open Application
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
