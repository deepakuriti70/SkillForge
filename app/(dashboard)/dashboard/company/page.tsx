"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Building2, Users, Target, Calendar, 
  MessageSquare, ArrowRight, Clock, TrendingUp 
} from "lucide-react"

const companyInfo = {
  name: "TechVenture Inc.",
  industry: "SaaS / Technology",
  size: "50-200 employees",
  founded: "2020",
  mission: "Building the future of remote collaboration through innovative software solutions.",
}

const team = [
  { name: "Alex Morgan", role: "You - Full-Stack Developer", avatar: "AM", isYou: true },
  { name: "Sarah Chen", role: "Engineering Manager", avatar: "SC" },
  { name: "Marcus Williams", role: "Senior Developer", avatar: "MW" },
  { name: "Elena Rodriguez", role: "Product Designer", avatar: "ER" },
  { name: "David Kim", role: "DevOps Engineer", avatar: "DK" },
]

const currentSprint = {
  name: "Sprint 24 - Q2 Features",
  progress: 65,
  daysLeft: 5,
  tasks: { completed: 8, total: 12 },
}

const announcements = [
  { title: "All-hands meeting tomorrow at 2PM", time: "2 hours ago", priority: "high" },
  { title: "New design system components available", time: "1 day ago", priority: "normal" },
  { title: "Q2 goals review next week", time: "3 days ago", priority: "normal" },
]

export default function CompanyPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Company</h1>
        <p className="text-muted-foreground">Your virtual workplace at {companyInfo.name}</p>
      </div>

      {/* Company Overview */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 border border-primary/30">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{companyInfo.name}</h2>
            <p className="text-muted-foreground">{companyInfo.industry}</p>
          </div>
          <Badge variant="secondary" className="sm:ml-auto bg-green-500/10 text-green-500">
            Active
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-6">{companyInfo.mission}</p>
        
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-secondary/50">
            <div className="text-sm text-muted-foreground">Company Size</div>
            <div className="font-semibold">{companyInfo.size}</div>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50">
            <div className="text-sm text-muted-foreground">Founded</div>
            <div className="font-semibold">{companyInfo.founded}</div>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50">
            <div className="text-sm text-muted-foreground">Your Role</div>
            <div className="font-semibold">Full-Stack Developer</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Current Sprint */}
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Current Sprint</h3>
            <Badge variant="secondary">
              <Clock className="h-3 w-3 mr-1" />
              {currentSprint.daysLeft} days left
            </Badge>
          </div>
          
          <h4 className="font-medium mb-4">{currentSprint.name}</h4>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sprint Progress</span>
              <span className="font-medium">{currentSprint.progress}%</span>
            </div>
            <Progress value={currentSprint.progress} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{currentSprint.tasks.completed} tasks completed</span>
              <span>{currentSprint.tasks.total - currentSprint.tasks.completed} remaining</span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            <Target className="h-4 w-4 mr-2" />
            View Sprint Board
          </Button>
        </div>

        {/* Team */}
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Your Team</h3>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  member.isYou ? "bg-primary/20 text-primary" : "bg-secondary text-foreground"
                }`}>
                  {member.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">
                    {member.name}
                    {member.isYou && <Badge variant="secondary" className="ml-2 text-xs">You</Badge>}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">{member.role}</div>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Company Announcements</h3>
          <Badge variant="secondary">{announcements.length} new</Badge>
        </div>
        
        <div className="space-y-3">
          {announcements.map((announcement, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
            >
              <div className={`h-2 w-2 rounded-full mt-2 ${
                announcement.priority === "high" ? "bg-red-500" : "bg-muted-foreground"
              }`} />
              <div className="flex-1">
                <p className="font-medium">{announcement.title}</p>
                <p className="text-sm text-muted-foreground">{announcement.time}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
