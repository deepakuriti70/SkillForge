"use client"

import { 
  Briefcase, 
  Brain, 
  Code2, 
  MessageSquare, 
  Users, 
  Trophy,
  Rocket,
  Target
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Briefcase,
    title: "Virtual Company Experience",
    description: "Join AI-powered companies with realistic team dynamics, projects, and deadlines. Experience startup to enterprise environments.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Brain,
    title: "AI Career Mentor",
    description: "Get personalized guidance from GPT-4 powered mentors who understand your goals and provide actionable career advice.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code2,
    title: "Real Coding Environment",
    description: "Write, test, and deploy code in our integrated IDE. Complete real projects that build your portfolio.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: MessageSquare,
    title: "AI Mock Interviews",
    description: "Practice behavioral and technical interviews with AI interviewers. Get instant feedback and improvement tips.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with AI teammates and real users on group projects. Learn communication and teamwork skills.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Trophy,
    title: "Skill Certification",
    description: "Earn verified certificates as you complete simulations. Showcase your skills to potential employers.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Rocket,
    title: "Career Path Simulator",
    description: "Explore different career trajectories. See where each path leads and make informed decisions about your future.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "AI adapts tasks to your skill level. Progress at your own pace with challenges tailored to your growth.",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Launch Your Career</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            SkillForge combines cutting-edge AI with proven learning methodologies 
            to create the most immersive career preparation platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-6">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:glow-primary transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
