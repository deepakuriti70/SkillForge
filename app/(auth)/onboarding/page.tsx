"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { 
  Zap, ArrowRight, ArrowLeft, Code2, Palette, LineChart, 
  Brain, Shield, Megaphone, Check 
} from "lucide-react"

const careerPaths = [
  { id: "full-stack", icon: Code2, title: "Full-Stack Developer", description: "Build complete web applications" },
  { id: "frontend", icon: Code2, title: "Frontend Engineer", description: "Create beautiful user interfaces" },
  { id: "backend", icon: Code2, title: "Backend Developer", description: "Design robust server systems" },
  { id: "ui-ux", icon: Palette, title: "UI/UX Designer", description: "Design intuitive experiences" },
  { id: "data-science", icon: LineChart, title: "Data Scientist", description: "Analyze and predict with data" },
  { id: "product", icon: Brain, title: "Product Manager", description: "Lead product strategy" },
  { id: "security", icon: Shield, title: "Security Engineer", description: "Protect systems and data" },
  { id: "marketing", icon: Megaphone, title: "Growth Marketer", description: "Drive user acquisition" },
]

const experienceLevels = [
  { id: "beginner", title: "Beginner", description: "New to the field, learning fundamentals" },
  { id: "intermediate", title: "Intermediate", description: "Some experience, building skills" },
  { id: "advanced", title: "Advanced", description: "Experienced, seeking mastery" },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [selectedCareer, setSelectedCareer] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [goals, setGoals] = useState("")
  const { updateUser } = useAuth()
  const router = useRouter()

  const handleComplete = () => {
    const career = careerPaths.find(c => c.id === selectedCareer)
    if (career) {
      updateUser({ 
        careerPath: career.title,
        company: "TechVenture Inc."
      })
    }
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Skill<span className="text-gradient">Forge</span>
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="px-6 pb-6">
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">Step 1 of 3</Badge>
              <h1 className="text-3xl font-bold mb-2">Choose Your Career Path</h1>
              <p className="text-muted-foreground mb-8">
                Select the career you want to explore. You can always change this later.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {careerPaths.map((career) => (
                  <button
                    key={career.id}
                    onClick={() => setSelectedCareer(career.id)}
                    className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                      selectedCareer === career.id 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      selectedCareer === career.id ? "bg-primary/20" : "bg-secondary"
                    }`}>
                      <career.icon className={`h-5 w-5 ${selectedCareer === career.id ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{career.title}</h3>
                      <p className="text-sm text-muted-foreground">{career.description}</p>
                    </div>
                    {selectedCareer === career.id && (
                      <Check className="h-5 w-5 text-primary shrink-0 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">Step 2 of 3</Badge>
              <h1 className="text-3xl font-bold mb-2">Your Experience Level</h1>
              <p className="text-muted-foreground mb-8">
                This helps us customize your simulation experience.
              </p>
              
              <div className="space-y-3">
                {experienceLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`flex items-center justify-between w-full p-5 rounded-xl border text-left transition-all ${
                      selectedLevel === level.id 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div>
                      <h3 className="font-semibold">{level.title}</h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                    {selectedLevel === level.id && (
                      <Check className="h-5 w-5 text-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">Step 3 of 3</Badge>
              <h1 className="text-3xl font-bold mb-2">Your Goals</h1>
              <p className="text-muted-foreground mb-8">
                What do you hope to achieve? This helps your AI mentor guide you better.
              </p>
              
              <div>
                <Label htmlFor="goals">Tell us about your goals (optional)</Label>
                <textarea
                  id="goals"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="w-full mt-2 p-4 rounded-xl border border-border bg-background min-h-[150px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., I want to transition from marketing to software development within 6 months..."
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            ) : (
              <div />
            )}
            
            {step < 3 ? (
              <Button 
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !selectedCareer}
                className="gradient-primary border-0"
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleComplete}
                className="gradient-primary border-0"
              >
                Start Your Journey
                <Zap className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
