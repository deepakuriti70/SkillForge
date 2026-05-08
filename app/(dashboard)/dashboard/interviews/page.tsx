"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  MessageSquare, Play, Clock, Trophy, 
  Target, CheckCircle2, ArrowRight, Star 
} from "lucide-react"

const interviewTypes = [
  {
    id: "technical",
    title: "Technical Interview",
    description: "Coding challenges, system design, and technical problem-solving",
    duration: "45 min",
    difficulty: "Intermediate",
    xp: 200,
    icon: "💻",
  },
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "Situational questions using the STAR method",
    duration: "30 min",
    difficulty: "Beginner",
    xp: 100,
    icon: "🎯",
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Design scalable systems and architecture decisions",
    duration: "60 min",
    difficulty: "Advanced",
    xp: 300,
    icon: "🏗️",
  },
  {
    id: "coding",
    title: "Live Coding",
    description: "Real-time coding with an AI interviewer watching",
    duration: "45 min",
    difficulty: "Intermediate",
    xp: 250,
    icon: "⌨️",
  },
]

const pastInterviews = [
  {
    id: "1",
    type: "Technical Interview",
    date: "May 5, 2026",
    score: 85,
    feedback: "Strong problem-solving skills. Work on time complexity analysis.",
    duration: "42 min",
  },
  {
    id: "2",
    type: "Behavioral Interview",
    date: "May 3, 2026",
    score: 92,
    feedback: "Excellent use of STAR method. Clear communication.",
    duration: "28 min",
  },
  {
    id: "3",
    type: "System Design",
    date: "Apr 28, 2026",
    score: 78,
    feedback: "Good high-level thinking. Consider more edge cases.",
    duration: "55 min",
  },
]

const stats = {
  totalInterviews: 12,
  averageScore: 85,
  streak: 5,
  totalXP: 1850,
}

export default function InterviewsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Interviews</h1>
        <p className="text-muted-foreground">Practice interviews with AI and get instant feedback</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalInterviews}</div>
              <div className="text-sm text-muted-foreground">Interviews</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
              <Target className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.averageScore}%</div>
              <div className="text-sm text-muted-foreground">Avg Score</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalXP}</div>
              <div className="text-sm text-muted-foreground">XP Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Types */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Start a New Interview</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {interviewTypes.map((interview) => (
            <div 
              key={interview.id} 
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{interview.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {interview.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{interview.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {interview.duration}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {interview.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                      +{interview.xp} XP
                    </Badge>
                  </div>
                </div>
                <Button size="sm" className="gradient-primary border-0 shrink-0">
                  <Play className="h-4 w-4 mr-1" />
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Interviews */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Interviews</h2>
          <Button variant="ghost" size="sm">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="space-y-3">
          {pastInterviews.map((interview) => (
            <div 
              key={interview.id} 
              className="glass-card p-5 rounded-xl hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">{interview.type}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{interview.feedback}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{interview.date}</span>
                    <span>{interview.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{interview.score}%</div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>
                  <div className="w-24">
                    <Progress value={interview.score} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
