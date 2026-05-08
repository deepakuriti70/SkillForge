"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, ExternalLink, Zap } from "lucide-react"

const pressReleases = [
  {
    date: "May 1, 2026",
    title: "SkillForge Raises $50M Series B to Expand AI Career Simulations",
    excerpt: "Funding will accelerate product development and international expansion.",
  },
  {
    date: "March 15, 2026",
    title: "SkillForge Reaches 50,000 Active Users Milestone",
    excerpt: "Platform sees 300% year-over-year growth in user adoption.",
  },
  {
    date: "January 20, 2026",
    title: "SkillForge Launches Enterprise Edition",
    excerpt: "New offering brings AI-powered training to Fortune 500 companies.",
  },
  {
    date: "November 10, 2025",
    title: "SkillForge Named Top 50 EdTech Startups to Watch",
    excerpt: "Recognition highlights innovative approach to career development.",
  },
]

const coverage = [
  { outlet: "TechCrunch", title: "SkillForge is changing how we prepare for careers", link: "#" },
  { outlet: "Forbes", title: "The AI-powered future of professional development", link: "#" },
  { outlet: "VentureBeat", title: "How simulations are replacing traditional training", link: "#" },
  { outlet: "The Verge", title: "Practice your dream job before you get it", link: "#" },
]

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Press & Media
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              News, announcements, and resources for journalists and media professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download Press Kit
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="h-5 w-5 mr-2" />
                Media Inquiries
              </Button>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <Link
                  key={release.title}
                  href="#"
                  className="block glass-card p-6 rounded-xl hover:border-primary/30 transition-colors group"
                >
                  <div className="text-sm text-muted-foreground mb-2">{release.date}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground">{release.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">In the News</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {coverage.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="flex items-start gap-4 glass-card p-5 rounded-xl hover:border-primary/30 transition-colors group"
                >
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-xs">{item.outlet}</Badge>
                    <p className="font-medium group-hover:text-primary transition-colors">{item.title}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Brand Assets</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 border border-primary/30 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Logo</h3>
                <p className="text-sm text-muted-foreground mb-4">PNG, SVG, and vector formats</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="flex gap-2 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary" />
                  <div className="h-10 w-10 rounded-lg bg-accent" />
                  <div className="h-10 w-10 rounded-lg bg-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Brand Guidelines</h3>
                <p className="text-sm text-muted-foreground mb-4">Colors, typography, and usage</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
            <p className="text-muted-foreground mb-2">
              For press inquiries, please contact:
            </p>
            <a href="mailto:press@skillforge.app" className="text-primary hover:underline font-medium">
              press@skillforge.app
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
