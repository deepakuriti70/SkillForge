"use client"

import { Badge } from "@/components/ui/badge"
import { UserPlus, Target, Rocket, Award } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Tell us about your skills, interests, and career goals. Our AI analyzes your background to create a personalized learning path.",
  },
  {
    number: "02",
    icon: Target,
    title: "Choose Your Career Path",
    description: "Select from dozens of career paths including Software Engineering, Product Management, Data Science, UX Design, and more.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start Your Simulation",
    description: "Join a virtual company, meet your AI team, and begin working on real-world projects. Complete tasks, attend meetings, and build your portfolio.",
  },
  {
    number: "04",
    icon: Award,
    title: "Get Certified & Hired",
    description: "Earn skill certificates as you progress. Use your verified experience and portfolio to land your dream job.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">
            Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From Zero to <span className="text-gradient">Career Ready</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our proven 4-step process has helped thousands of people successfully 
            transition into their dream careers.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative flex flex-col items-center text-center p-6">
                  {/* Step Number */}
                  <div className="mb-6 relative">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-border bg-card group-hover:border-primary group-hover:glow-primary transition-all duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
