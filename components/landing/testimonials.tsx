"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    initials: "SC",
    content: "SkillForge completely changed how I prepared for my career. The AI simulations felt so real - I walked into my Google interview feeling like I'd already been working there for months.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager at Stripe",
    initials: "MJ",
    content: "The career mentor understood exactly where I was struggling and created custom challenges to help me grow. Best investment I've made in my career development.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer at Figma",
    initials: "ER",
    content: "I went from bootcamp grad to hired designer in 3 months. The portfolio projects I built during simulations were exactly what hiring managers wanted to see.",
    rating: 5,
  },
  {
    name: "Alex Kim",
    role: "Data Scientist at Netflix",
    initials: "AK",
    content: "The technical interview prep was incredibly thorough. The AI interviewer asked questions that were harder than my actual Netflix interview!",
    rating: 5,
  },
  {
    name: "Jordan Taylor",
    role: "Full-Stack Developer at Airbnb",
    initials: "JT",
    content: "Working in a simulated startup environment taught me things no course could - how to prioritize, communicate, and ship under pressure.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Engineering Manager at Meta",
    initials: "PP",
    content: "I used SkillForge to transition from IC to management. The leadership simulations prepared me for challenges I face every day now.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Loved by <span className="text-gradient">Career Changers</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join thousands of professionals who have transformed their careers with SkillForge.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarFallback className="bg-primary/20 text-primary text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
