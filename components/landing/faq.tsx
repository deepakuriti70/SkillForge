"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes SkillForge different from online courses?",
    answer: "Unlike passive video courses, SkillForge provides active, hands-on experience. You'll work on real projects in simulated company environments with AI teammates and mentors. It's the closest thing to actual job experience without being employed.",
  },
  {
    question: "How realistic are the AI simulations?",
    answer: "Our simulations are powered by GPT-4 and designed with input from hiring managers at top tech companies. Users consistently report that their SkillForge experience prepared them better than traditional preparation methods for real-world scenarios.",
  },
  {
    question: "Can I use my SkillForge projects in my portfolio?",
    answer: "Absolutely! All projects you complete during simulations are yours to keep and showcase. Many of our users have landed jobs specifically because hiring managers were impressed by their SkillForge portfolio projects.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most users see significant skill improvement within 4-6 weeks of consistent practice. Career transitions typically happen within 3-6 months, though this varies based on your starting point and target role.",
  },
  {
    question: "Is SkillForge suitable for complete beginners?",
    answer: "Yes! We have career paths designed for all skill levels. Our AI adapts the difficulty and pace to match your current abilities, ensuring you're always challenged but never overwhelmed.",
  },
  {
    question: "What career paths are available?",
    answer: "We currently offer simulations for Software Engineering (Frontend, Backend, Full-Stack), Product Management, Data Science, UX/UI Design, DevOps, and more. We're constantly adding new paths based on user demand.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime with no questions asked. If you cancel, you'll retain access until the end of your billing period. We also offer a 14-day money-back guarantee on all paid plans.",
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer: "Yes! Our Enterprise plan includes custom career paths, team analytics, and dedicated support. Contact our sales team to learn more about bulk licensing and custom solutions for your organization.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about SkillForge and how it can help your career.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
