"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Folder, Plus, Users, Clock, ArrowRight, GitBranch, Star } from "lucide-react"

const projects = [
  {
    id: "1",
    name: "Customer Portal Redesign",
    description: "Modernizing the customer-facing dashboard with improved UX and new features",
    status: "active",
    progress: 75,
    team: ["AM", "SC", "ER"],
    dueDate: "May 15, 2026",
    commits: 142,
    starred: true,
  },
  {
    id: "2",
    name: "API Gateway Implementation",
    description: "Building a centralized API gateway for microservices architecture",
    status: "active",
    progress: 45,
    team: ["AM", "MW", "DK"],
    dueDate: "May 30, 2026",
    commits: 87,
    starred: true,
  },
  {
    id: "3",
    name: "Mobile App v2.0",
    description: "Major update to the mobile application with offline support",
    status: "planning",
    progress: 10,
    team: ["AM", "ER"],
    dueDate: "June 20, 2026",
    commits: 12,
    starred: false,
  },
  {
    id: "4",
    name: "Analytics Dashboard",
    description: "Real-time analytics and reporting dashboard for internal teams",
    status: "completed",
    progress: 100,
    team: ["AM", "SC", "MW"],
    dueDate: "Completed",
    commits: 234,
    starred: false,
  },
]

const statusConfig = {
  "active": { label: "Active", color: "bg-green-500/10 text-green-500" },
  "planning": { label: "Planning", color: "bg-yellow-500/10 text-yellow-500" },
  "completed": { label: "Completed", color: "bg-blue-500/10 text-blue-500" },
  "on-hold": { label: "On Hold", color: "bg-gray-500/10 text-gray-500" },
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Your active projects and contributions</p>
        </div>
        <Button className="gradient-primary border-0">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl">
          <div className="text-2xl font-bold">{projects.length}</div>
          <div className="text-sm text-muted-foreground">Total Projects</div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-2xl font-bold">{projects.filter(p => p.status === "active").length}</div>
          <div className="text-sm text-muted-foreground">Active</div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-2xl font-bold">{projects.reduce((sum, p) => sum + p.commits, 0)}</div>
          <div className="text-sm text-muted-foreground">Total Commits</div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-2xl font-bold">{projects.filter(p => p.starred).length}</div>
          <div className="text-sm text-muted-foreground">Starred</div>
        </div>
      </div>

      {/* Project List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      {project.starred && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <Badge variant="secondary" className={statusConfig[project.status].color}>
                    {statusConfig[project.status].label}
                  </Badge>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <div 
                          key={i}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary border-2 border-background text-xs font-medium"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <GitBranch className="h-4 w-4" />
                    {project.commits} commits
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {project.dueDate}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3 min-w-[200px]">
                <div className="w-full">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Project <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
