"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Users, Trophy, Code2 } from "lucide-react"

const stats = [
  { icon: Users, value: "50K+", label: "Active Learners" },
  { icon: Trophy, value: "10K+", label: "Career Transitions" },
  { icon: Code2, value: "500+", label: "Simulated Projects" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Announcement Badge */}
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            Now with GPT-4 Powered AI Mentors
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="text-balance">
              Experience Your Dream Career{" "}
              <span className="text-gradient glow-text-primary">Before You Land It</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            SkillForge uses AI to create immersive job simulations with virtual companies, 
            real-world tasks, and personalized mentorship. Build real skills. Get hired faster.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" asChild className="gradient-primary border-0 text-lg px-8 h-14 group">
              <Link href="/signup">
                Start Your Free Simulation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <p className="mt-6 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
            No credit card required. 14-day free trial.
          </p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16 animate-in fade-in slide-in-from-bottom-14 duration-700 delay-500">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Hero Visual */}
          <div className="mt-20 w-full max-w-5xl animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-60" />
              
              {/* Dashboard Preview */}
              <div className="relative glass rounded-2xl border border-border/50 overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-success/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                      dashboard.skillforge.app
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-card to-background p-8">
                  {/* Mock Dashboard UI */}
                  <div className="grid grid-cols-12 gap-4 h-full">
                    {/* Sidebar Mock */}
                    <div className="col-span-2 bg-sidebar/50 rounded-lg p-3 flex flex-col gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={`h-8 rounded-md ${i === 0 ? 'bg-primary/20' : 'bg-muted/30'}`} />
                      ))}
                    </div>
                    {/* Main Content Mock */}
                    <div className="col-span-10 flex flex-col gap-4">
                      <div className="flex gap-4">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex-1 h-24 bg-card/50 rounded-lg border border-border/30 p-4">
                            <div className="h-3 w-16 bg-muted/50 rounded mb-2" />
                            <div className="h-6 w-20 bg-primary/30 rounded" />
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-card/50 rounded-lg border border-border/30 p-4">
                        <div className="h-3 w-32 bg-muted/50 rounded mb-4" />
                        <div className="grid grid-cols-2 gap-4 h-full">
                          <div className="bg-muted/20 rounded-lg" />
                          <div className="bg-muted/20 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
