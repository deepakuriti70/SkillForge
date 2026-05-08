"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, Users, Calendar, Trophy, 
  Github, Twitter, Youtube, ArrowRight 
} from "lucide-react"

const communities = [
  {
    icon: MessageSquare,
    title: "Discord Server",
    description: "Join 10,000+ members discussing careers, sharing tips, and helping each other.",
    members: "10,000+",
    action: "Join Discord",
    href: "#",
  },
  {
    icon: Github,
    title: "GitHub Discussions",
    description: "Contribute to open-source projects and discuss technical topics.",
    members: "2,500+",
    action: "View GitHub",
    href: "#",
  },
  {
    icon: Twitter,
    title: "Twitter/X",
    description: "Follow us for tips, announcements, and daily career advice.",
    members: "25,000+",
    action: "Follow Us",
    href: "#",
  },
  {
    icon: Youtube,
    title: "YouTube Channel",
    description: "Tutorials, interviews, and career development content.",
    members: "15,000+",
    action: "Subscribe",
    href: "#",
  },
]

const events = [
  {
    title: "Weekly Office Hours",
    description: "Live Q&A with SkillForge mentors every Friday",
    date: "Every Friday, 2PM EST",
  },
  {
    title: "Monthly Career Workshop",
    description: "Deep-dive sessions on specific career topics",
    date: "First Saturday of each month",
  },
  {
    title: "Annual SkillForge Summit",
    description: "Our biggest event with speakers, workshops, and networking",
    date: "September 2026",
  },
]

const topContributors = [
  { name: "Sarah K.", points: 12500, badge: "Champion" },
  { name: "Marcus T.", points: 11200, badge: "Champion" },
  { name: "Elena R.", points: 9800, badge: "Expert" },
  { name: "David L.", points: 8500, badge: "Expert" },
  { name: "Priya M.", points: 7200, badge: "Expert" },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Users className="h-3 w-3 mr-1" />
              Community
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Learn Together, <span className="text-gradient">Grow Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a global community of career changers, learners, and mentors 
              all helping each other succeed.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">120+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-muted-foreground">Weekly Discussions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-muted-foreground">Monthly Events</div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Join the Conversation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communities.map((community) => (
                <div key={community.title} className="glass-card p-6 rounded-2xl flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <community.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{community.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{community.description}</p>
                  <div className="text-sm text-muted-foreground mb-4">{community.members} members</div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={community.href}>{community.action}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button variant="ghost" size="sm">
                View Calendar <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.title} className="glass-card p-5 rounded-xl flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <p className="text-xs text-primary mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Top Contributors</h2>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="space-y-3">
              {topContributors.map((contributor, index) => (
                <div key={contributor.name} className="glass-card p-4 rounded-xl flex items-center gap-4">
                  <div className="text-2xl font-bold text-muted-foreground w-8">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{contributor.name}</div>
                    <div className="text-sm text-muted-foreground">{contributor.points.toLocaleString()} points</div>
                  </div>
                  <Badge variant="secondary" className={index < 2 ? "bg-yellow-500/10 text-yellow-500" : ""}>
                    {contributor.badge}
                  </Badge>
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
